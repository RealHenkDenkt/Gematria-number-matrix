let IrrationalHandler = function () {

}

IrrationalHandler.prototype.setNumber = function (number) {
    this.number = number;
}

IrrationalHandler.prototype.getRowForNumber = function () {
    this.setNumber(number);
    return this.getPositionAndSums();
}

IrrationalHandler.prototype.getPositionAndSums = function () {
    return {
        'PI' : this.getPIPositionAndSum(),
        'PHI': this.getPHIPositionAndSum(),
        'EULER': this.getEULERPositionAndSum(),
        'SQRT2': this.getSQRT2PositionAndSum(),
        'SQRT3': this.getSQRT3PositionAndSum(),
        'SQRT5' : this.getSQRT5PositionAndSum(),
        'SQRT7': this.getSQRT7PositionAndSum(),
        'LEMNI': this.getLEMNIPositionAndSum(),
        'ZETA' : this.getZETAPositionAndSum()
    };
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