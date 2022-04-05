let IrrationalNumber = function (type) {
    this.types = {
        PHI: PHIBIG,
       PI: PIEXTRABIG,
       // PI: PISUPERBIG,
        E: EBIG,
        EULER: EBIG,
        SQRT2: SQRT2,
        SQRT3: SQRT3,
        SQRT5: SQRT5,
        SQRT7: SQRT7,
        LEMNI: LEMNI,
        ZETA: ZETA
    }
    if (type === 'SQRT') type = 'SQRT2';
    this.type = this.types[type];
};

IrrationalNumber.prototype.getAllIndexesForRange = function (val, start, end = 1000) {
    let range = this.type.substr(start, end);

    return this.getAllIndexes(val, range, start);
}

IrrationalNumber.prototype.getAllIndexes = function (val, range = this.type, add=0) {
    let indexes = [], i = -1;
    while ((i = range.indexOf(val, i+1)) !== -1){
        indexes.push(i+1+add);
    }
    return indexes;
}

IrrationalNumber.prototype.searchDeep = function (search, index ) {
    let positions = [],
        result = getPosition(this.type, search, index);

    if (-1 !== result) {
        result++;
        // add some bonus summation
        if (search.length > 1) {
            for (let i = 0; i < search.length; i++) {
                positions.push(result + i);
            }
        } else {
            return [result];
        }
    }

    return positions;

    function getPosition(irrationalNumber, search, index) {
        return irrationalNumber.split(search, index).join(search).length;
    }
}
IrrationalNumber.prototype.getPositionAndSum = function (number) {
    let numberString = number.toString(),
    sum = 0,
    position = this.type.indexOf(number) + 1;

    for (let i =0; i < numberString.length; i ++) {
        sum += position + i;
    }

    return [position, sum];

}

IrrationalNumber.prototype.search = function (number) {
    let result = this.type.indexOf(number),
        positions = [];

    if (-1 !== result) {
        result++;
        // add some bonus summation
        if (number.length > 1) {
            for (let i = 0; i < number.length; i++) {
                positions.push(result + i);
            }
        } else {
            return [result];
        }
    }
    return positions;
}

IrrationalNumber.prototype.getStringLocation = function (number) {
    return this.type.substr((number - 10), 30);
}
