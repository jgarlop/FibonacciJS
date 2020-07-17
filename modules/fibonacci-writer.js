const fs = require('fs');
const fiboGen = require('./fibonacci-generator');

function fibonacciToFile(count, filename){
    const fibonacciSerie = fiboGen(count);

    return new Promise((resolve, reject) => {
        fs.writeFile(filename, fibonacciSerie, (err) => {
            if (err) reject(err);
            resolve();
        });
    })
}

//Exports
module.exports = {
    fibonacciToFile
}
