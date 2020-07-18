const fibonacciSeries = require('./modules/fibonacci-writer');
const constants = require('./modules/constants');

main();

function checkArgsForCount() {
  const args = process.argv;
  let count = 0;

  args.forEach((item) => {
    if (item.startsWith('--count')) {
      count = parseInt(item.split('=')[1]);
      return;
    }
  });

  return count;
}

function retrieveCount() {
  const count = checkArgsForCount();

  return count === 0 ? constants.defaultCount : count;
}

function main() {
  console.log(constants.appTitle.bgBlue);

  fibonacciSeries.fibonacciToFile(retrieveCount(), constants.filename)
      .then(console.log(constants.successMessage, constants.filename.red))
      .catch((err) => console.log(err));
}

