const appTitle = 'Generation of a fibonacci serie and output to a file.\nYou can use the command line argument \'--count=\' to especify the number of elements of the serie'
const defaultCount = 15;
const filename = 'fibonacci.txt';
const successMessage = `File %s was created.`;


//Exports
module.exports = {
    appTitle,
    defaultCount,
    filename,
    successMessage
}