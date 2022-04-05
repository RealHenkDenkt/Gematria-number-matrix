var Pi = function () {
//this.PI = PIEXTRABIG;
    this.PI = PISUPERBIG;
}

Pi.prototype.searchDeep = function (search, index ) {
    let positions = [],
        result = getPosition(this.PI, search, index);
    //return getPosition(this.PI, search, index);
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

    function getPosition(pi, search, index) {
        return pi.split(search, index).join(search).length;
    }
}

Pi.prototype.search = function (number) {
    let result = this.PI.indexOf(number),
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

Pi.prototype.getStringLocation = function (number) {
    return this.PI.substr((number - 1), 10);
}