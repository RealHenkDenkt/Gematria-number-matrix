let CompositeManager = function () {
    this.compositesList = Composites;
}

CompositeManager.prototype.getCompositeByNumber = function (number) {
   // if (this.compositesList[number -1] === undefined) return this.isComposite(number);
    return this.compositesList[number - 1];
}
CompositeManager.prototype.getCompositeByIndex = function (number) {
    // if (this.compositesList[number -1] === undefined) return this.isComposite(number);
    return this.compositesList[number - 1];
}

CompositeManager.prototype.isComposite = function (number) {
    if (number > 49998) return -1;
    return this.compositesList.indexOf(number);
/*    let primes = new PrimeManager();
    number = parseInt(number);


    if (true === primes.isPrimeExperimental(number)) {
        return -1;
    }


    let index = CompositeNumbers.indexOf(number);

    if (index > -1) {
        return index+1;
    }

    index = CompositeNumbers.length -1;
    // Long search
    for (let i = index; i <=number; i++) {
        if (false === primes.isPrimeExperimental(i)) {
            index++;
        }
    }

    if (index > 0) return index;
    return -1;*/
}


