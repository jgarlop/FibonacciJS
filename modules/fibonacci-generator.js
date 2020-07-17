function generateFibbonacci(count) {
    let fibSeries = [0,1];
    
    for (let i = 2; i < count; i++) {
        fibSeries.push(fibSeries[i-1] + fibSeries[i-2])
    }

    return fibSeries;
}

//Exports
module.exports = generateFibbonacci;