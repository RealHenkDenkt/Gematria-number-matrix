let IrrationalHandler = function () {
    this.irrationalToggles = {
        'PI' : false,
        'PHI' : false,
        'EULER': false,
        'SQRT2': false,
        'SQRT3': false,
        'SQRT5': false,
        'SQRT7': false,
        'LEMNI': false,
        'ZETA': false
    };
}

IrrationalHandler.prototype.checkToggled = function () {
    let prefix = '#factorMatrixToggle';

    for (let irrational in this.irrationalToggles) {
        if (this.irrationalToggles.hasOwnProperty(irrational)) {
            let element = prefix + irrational;
            if (false === $(element)[0].checked) this.irrationalToggles[irrational] = true;
        }
    }
}

IrrationalHandler.prototype.setNumber = function (number) {
    this.checkToggled();
    this.number = number;
}

IrrationalHandler.prototype.getPositionAndSums = function () {
    let collection = {};

    if (true === this.irrationalToggles['PI']) collection['PI'] = this.getPIPositionAndSum();
    if (true === this.irrationalToggles['PHI']) collection['PHI'] = this.getPHIPositionAndSum();
    if (true === this.irrationalToggles['EULER']) collection['EULER'] = this.getEULERPositionAndSum();
    if (true === this.irrationalToggles['SQRT2']) collection['SQRT2'] = this.getSQRT2PositionAndSum();
    if (true === this.irrationalToggles['SQRT3']) collection['SQRT3'] = this.getSQRT3PositionAndSum();
    if (true === this.irrationalToggles['SQRT5']) collection['SQRT5'] = this.getSQRT5PositionAndSum();
    if (true === this.irrationalToggles['SQRT7']) collection['SQRT7'] = this.getSQRT7PositionAndSum();
    if (true === this.irrationalToggles['LEMNI']) collection['LEMNI'] = this.getLEMNIPositionAndSum();
    if (true === this.irrationalToggles['ZETA']) collection['ZETA'] = this.getZETAPositionAndSum();

    collection['SUM'] = this.getSumTotal(collection);

    return collection;
}

IrrationalHandler.prototype.getSumTotal = function (collection) {
    let
        totalA = 0,
        totalB = 0;

    for (let index in collection) {
        if (collection.hasOwnProperty(index)) {
            totalA += collection[index][0];
            totalB += collection[index][1];
        }
    }

    return [totalA, totalB];
}

IrrationalHandler.prototype.getPIPositionAndSum = function () {
    return this.getPositionAndSum('PI');
}

IrrationalHandler.prototype.getPHIPositionAndSum = function () {
    return this.getPositionAndSum('PHI');
}

IrrationalHandler.prototype.getEULERPositionAndSum = function () {
    return this.getPositionAndSum('EULER');
}

IrrationalHandler.prototype.getSQRT2PositionAndSum = function () {
    return this.getPositionAndSum('SQRT2');
}

IrrationalHandler.prototype.getSQRT3PositionAndSum = function () {
    return this.getPositionAndSum('SQRT3');
}

IrrationalHandler.prototype.getSQRT5PositionAndSum = function () {
    return this.getPositionAndSum('SQRT5');
}

IrrationalHandler.prototype.getSQRT7PositionAndSum = function () {
    return this.getPositionAndSum('SQRT7');
}

IrrationalHandler.prototype.getLEMNIPositionAndSum = function () {
    return this.getPositionAndSum('LEMNI');
}

IrrationalHandler.prototype.getZETAPositionAndSum = function () {
    return this.getPositionAndSum('ZETA');
}

IrrationalHandler.prototype.getPositionAndSum = function (type) {
    let irrationalNumber = new IrrationalNumber(type);
    return irrationalNumber.getPositionAndSum(this.number);
}

