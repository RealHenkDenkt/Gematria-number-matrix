let FactorMatrixManager = function () {

}

FactorMatrixManager.prototype.checkHighlights = function () {
    // Check all highlight toggles and apply accordingly
    if (false === $('#factorMatrixTogglePrime')[0].checked) this.highlightPrimes();
    if (false === $('#factorMatrixTogglePythagorean')[0].checked) this.highlightPythagoreanPrimes();
    if (false === $('#factorMatrixToggleSemi')[0].checked) this.highlightSemiPrimes();
    if (false === $('#factorMatrixToggleTriangular')[0].checked) this.highlightTriangulars();
    if (false === $('#factorMatrixToggleTetrahedral')[0].checked) this.highlightTetrahedrals();
    if (false === $('#factorMatrixToggleHexagonal')[0].checked) this.highlightHexagonals();
    if (false === $('#factorMatrixToggleOctagonal')[0].checked) this.highlightOctagonals();
    if (false === $('#factorMatrixToggleLucas')[0].checked) this.highlightLucas();
    if (false === $('#factorMatrixToggleFibonacci')[0].checked) this.highlightFibonacci();
}

FactorMatrixManager.prototype.highlightPrimes = function () {
    // remove all prime highlights
    this.clearClass('bold-green');
    let primeManager = new PrimeManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === primeManager.isPrime(number)) {
            $(this).addClass('bold-green');
        }
    });
}

FactorMatrixManager.prototype.highlightPythagoreanPrimes = function () {
    // remove all prime highlights
    this.clearClass('bold-green');
    let primeManager = new PrimeManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === primeManager.isPythagoreanPrime(number)) {
            $(this).addClass('bold-green');
        }
    });
}

FactorMatrixManager.prototype.highlightSemiPrimes = function () {
    // remove all prime highlights
    this.clearClass('bold-orange');
    let primeManager = new PrimeManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === primeManager.isSemiprime(number)) {
            $(this).addClass('bold-orange');
        }
    });
}

FactorMatrixManager.prototype.highlightTriangulars = function () {
    // remove all prime highlights
    this.clearClass('bold-yellow');
    let triangularManager = new TriangularManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === triangularManager.isTriangular(number)) {
            $(this).addClass('bold-yellow');
        }
    });
}

FactorMatrixManager.prototype.highlightTetrahedrals = function () {
    // remove all prime highlights
    this.clearClass('bold-red');
    let tetrahedralManager = new TetrahedralManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === tetrahedralManager.isTetrahedral(number)) {
            $(this).addClass('bold-red');
        }
    });
}

FactorMatrixManager.prototype.highlightOctagonals = function () {
    // remove all prime highlights
    this.clearClass('bold-blue');
    let octagonalManager = new OctagonalManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === octagonalManager.isOctagonal(number)) {
            $(this).addClass('bold-blue');
        }
    });
}

FactorMatrixManager.prototype.highlightHexagonals = function () {
    // remove all prime highlights
    this.clearClass('bold-dark-blue');
    let hexagonalManager = new HexagonalManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === hexagonalManager.isHexagonal(number)) {
            $(this).addClass('bold-dark-blue');
        }
    });
}
FactorMatrixManager.prototype.highlightStars = function () {
    // remove all prime highlights
    this.clearClass('bold-yellow');
    let starManager = new StarnumberManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === starManager.isStarnumber(number)) {
            $(this).addClass('bold-yellow');
        }
    });
}
FactorMatrixManager.prototype.highlightLucas = function () {
    // remove all prime highlights
    this.clearClass('bold-green');
    let lucasManager = new LucasManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === lucasManager.isLucasNumber(number)) {
            $(this).addClass('bold-green');
        }
    });
}
FactorMatrixManager.prototype.highlightFibonacci = function () {
    // remove all prime highlights
    this.clearClass('bold-purple');
    let fibonaccisManager = new FibonaccisManager();

    $('#factorMatrixTable td span').each(function () {
        let number = $(this).attr('data-totals');

        if (true === fibonaccisManager.isFibonacci(number)) {
            $(this).addClass('bold-purple');
        }
    });
}

FactorMatrixManager.prototype.clearClass = function (css) {
    $('#factorMatrixTable td span').each(function () {
        if ($(this).hasClass(css)) {
            $(this).removeClass(css).removeClass('glow');
        }
    });
}

let FactorMatrix = function (number, depth, viewOnly) {
    this.number = parseInt(number);
    if (true !== viewOnly) {
        this.collection = [];
        this.depth = parseInt(depth);
        this.createFactorCollection();
    }

}


FactorMatrix.prototype.getHeader = function () {
    let collection = [],
        irrationalHandler = new IrrationalHandler();

    irrationalHandler.checkToggled();
    collection.push('<th class="thead-dark">#</th>');
    collection.push('<th class="thead-dark">Index</th>');
    collection.push('<th id="factorTypeCell" class="thead-dark">Factor</th>');

    if (true === irrationalHandler.irrationalToggles['PI']) collection.push('<th class="thead-dark">&pi;</th>');
    if (true === irrationalHandler.irrationalToggles['PHI']) collection.push('<th class="thead-dark">&#981;</th>');
    if (true === irrationalHandler.irrationalToggles['EULER']) collection.push('<th class="thead-dark">&#8455;</th>');
    if (true === irrationalHandler.irrationalToggles['SQRT2']) collection.push('<th class="thead-dark">&#8730;2</th>');
    if (true === irrationalHandler.irrationalToggles['SQRT3']) collection.push('<th class="thead-dark">&#8730;3</th>');
    if (true === irrationalHandler.irrationalToggles['SQRT5']) collection.push('<th class="thead-dark">&#8730;5</th>');
    if (true === irrationalHandler.irrationalToggles['SQRT7']) collection.push('<th class="thead-dark">&#8730;7</th>');
    if (true === irrationalHandler.irrationalToggles['LEMNI']) collection.push('<th class="thead-dark">&infin;</th>');
    if (true === irrationalHandler.irrationalToggles['ZETA']) collection.push('<th class="thead-dark">&zeta;</th>');

    collection.push('<th class="thead-dark">Sum</th>');

    return collection;
}

FactorMatrix.prototype.setHighlights = function () {
    this.clearHighlights();
    let highlights = $('#factorHighlights').val().replace(/ /g,'').split(',');

    for (let i = 0; i <= highlights.length; i++) {
        $('#factorMatrixTable td span').each(function () {
            if (parseInt($(this).attr('data-totals')) === parseInt(highlights[i])) {
                $(this).addClass('bold-light-green').addClass('glow');
            }
        });
    }
}

FactorMatrix.prototype.clearHighlights = function () {
    $('#factorMatrixTable td span').each(function () {
            $(this).removeClass('bold-light-green');
            $(this).removeClass('glow');
            $(this).attr('data-active-highlight', '');
        });
/*    $('#factorMatrixTable td span').each(function () {
        $(this).removeClass('bold-light-green');
        $(this).removeClass('glow');
        $(this).attr('data-active-highlight', '');
    });*/
}

FactorMatrix.prototype.setModalClicks = function () {
    $('#factorMatrixTable td span').each(function (){
        $(this).on('click', function () {
            if (undefined !== $(this).attr('data-toggle')) {
                $('#factorModalNumber').attr('value', $(this).attr('data-totals'));
                let factorMatrix = new FactorMatrix(0, 0, true);
                factorMatrix.fillModalContent($(this).attr('data-totals'));
            }
        })
    });

    /*$('#factorMatrixTable td span').each(function (){
        $(this).on('click', function () {
            if (undefined !== $(this).attr('data-toggle')) {
                $('#factorModalNumber').attr('value', $(this).attr('data-totals'));
                let factorMatrix = new FactorMatrix(0, 0, true);
                factorMatrix.fillModalContent($(this).attr('data-totals'));
            }
        })
    });*/
}

FactorMatrix.prototype.fillModalContent = function (number) {
    // left
    this.setModalContent(number, 'l');
    let mirror = '',
        numberString = number.toString();

    for (let i = numberString.length; i >=0; i--) {
        if (undefined !== numberString[i])  mirror += numberString[i];
    }
    this.setModalContent(parseInt(mirror), 'r');
}

FactorMatrix.prototype.clearModalContent = function (direction) {
    let element;
    element = '#fm'+direction+'-number';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-composite';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-prime';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-pythagorean-prime';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-semi-prime';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-fibonacci';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-triangular';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-hexagonal';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-tetrahedral';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-star';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-octagonal';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-lucas';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-reduced';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-cubed';
    this.setModalCell(element, '')
    element = '#fm'+direction+'-summed';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-times-self';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-times-mirror';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-plus-mirror';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-number-of-divisors';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-summed-divisors';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-summed-divisors-full';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-divisors';
    this.setModalCell(element, '');
    element = '#fm'+direction+'-factorization-text';
    this.setModalCell(element, '');
}

FactorMatrix.prototype.setModalContent = function (number, direction) {
    // clear first
    this.clearModalContent(direction);
    let numberHandler = new NumberHandler();
    numberHandler.setNumber(number);

    // set Number
    let element = '#fm'+direction+'-number';
    this.setModalCell(element, number);
    // set composite
    if (numberHandler.numberProperties.composite !== -1)  {
        element = '#fm'+direction+'-composite';
        this.setModalCell(element, numberHandler.numberProperties.composite);
    } else {
        // set prime
        if (numberHandler.numberProperties.prime !== -1) {
            element = '#fm'+direction+'-prime';
            this.setModalCell(element, numberHandler.numberProperties.prime);
        }
        // set Pythagorean prime
        if (numberHandler.numberProperties.pythagorean_prime !== -1) {
            element = '#fm'+direction+'-pythagorean-prime';
            this.setModalCell(element, numberHandler.numberProperties.pythagorean_prime);
        }
    }
    // Semi prime
    if (numberHandler.numberProperties.semi_prime !== -1) {
        element = '#fm'+direction+'-semi-prime';
        this.setModalCell(element, numberHandler.numberProperties.semi_prime);
    }

    // Fibonacci
    if (numberHandler.numberProperties.fibonacci !== -1) {
        element = '#fm'+direction+'-fibonacci';
        this.setModalCell(element, numberHandler.numberProperties.fibonacci);
    }
    // Triangular
    if (numberHandler.numberProperties.triangular !== -1) {
        element = '#fm'+direction+'-triangular';
        this.setModalCell(element, numberHandler.numberProperties.triangular);
    }
    // Hexagonal
    if (numberHandler.numberProperties.hexagonal !== -1) {
        element = '#fm'+direction+'-hexagonal';
        this.setModalCell(element, numberHandler.numberProperties.hexagonal);
    }
    // Tetrahedral
    if (numberHandler.numberProperties.tetrahedral !== -1) {
        element = '#fm'+direction+'-tetrahedral';
        this.setModalCell(element, numberHandler.numberProperties.tetrahedral);
    }
    // Star
    if (numberHandler.numberProperties.star !== -1) {
        element = '#fm'+direction+'-star';
        this.setModalCell(element, numberHandler.numberProperties.star);
    }
    // Octagonal
    if (numberHandler.numberProperties.octagonal !== -1) {
        element = '#fm'+direction+'-octagonal';
        this.setModalCell(element, numberHandler.numberProperties.octagonal);
    }
    // Lukas
    if (numberHandler.numberProperties.lucas !== -1) {
        element = '#fm'+direction+'-lucas';
        this.setModalCell(element, numberHandler.numberProperties.lucas);
    }
    // Reduced
    element = '#fm'+direction+'-reduced';
    this.setModalCell(element, numberHandler.numberProperties.reduced);
    // Cubed
    element = '#fm'+direction+'-cubed';
    this.setModalCell(element, numberHandler.number * numberHandler.number * numberHandler.number )
    // Summed
    element = '#fm'+direction+'-summed';
    this.setModalCell(element, numberHandler.numberProperties.summed);
    // TimesSelf
    element = '#fm'+direction+'-times-self';
    this.setModalCell(element, numberHandler.numberProperties.times_self);
    // TimesMirror
    element = '#fm'+direction+'-times-mirror';
    this.setModalCell(element, numberHandler.numberProperties.times_mirror);
    // PlusMirror
    element = '#fm'+direction+'-plus-mirror';
    this.setModalCell(element, numberHandler.numberProperties.plus_mirror);
    // Number of divisors
    element = '#fm'+direction+'-number-of-divisors';
    this.setModalCell(element, numberHandler.numberProperties.count_divisors);
    // Divisors summed
    element = '#fm'+direction+'-summed-divisors';
    this.setModalCell(element, numberHandler.numberProperties.sum_divisors);
    // Divisors summed full
    element = '#fm'+direction+'-summed-divisors-full';
    this.setModalCell(element, numberHandler.numberProperties.sum_divisors_full);
    // Divisors
    element = '#fm'+direction+'-divisors';
    if (Array.isArray(numberHandler.numberProperties.divisors)) this.setModalCell(element, numberHandler.numberProperties.divisors.join(', '));
    else this.setModalCell(element, numberHandler.numberProperties.divisors);

    element = '#fm'+direction+'-factorization-text';
    this.setModalCell(element, numberHandler.numberProperties.factorization_text);

}

FactorMatrix.prototype.setModalCell = function (element, value) {
    $(element).html(value);
}

FactorMatrix.prototype.getIndex = function (numberHandler) {
    let matrixType = $('#factorMatrixTypeSelector').val();
    switch (matrixType) {
        case 'composites':
            return numberHandler.numberProperties.composite;
        case 'primes':
            return numberHandler.numberProperties.prime;
        case 'pythagorean-primes':
            return numberHandler.numberProperties.pythagorean_prime;
        case 'semi-primes':
            return numberHandler.numberProperties.semi_prime;
        case 'triangulars':
            return numberHandler.numberProperties.triangular;
        case 'hexagonals':
            return numberHandler.numberProperties.hexagonal;
        case 'octagonals':
            return numberHandler.numberProperties.octagonal;
        case 'tetrahedrals':
            return numberHandler.numberProperties.tetrahedral;
        case 'stars':
            return numberHandler.numberProperties.star;
        case 'lucas':
            return numberHandler.numberProperties.lucas;


        case 'multiplication':
            if (parseInt(numberHandler.numberProperties.prime) !== 1) {
                return numberHandler.numberProperties.prime;
            } else {
                return numberHandler.numberProperties.composite;
            }
        default:
            return numberHandler.numberProperties.composite;
    }
}

FactorMatrix.prototype.createMatrixRow = function (number, index) {
    let numberHandler = new NumberHandler();
    let irrationalHandler = new IrrationalHandler();
//console.log(number);return;
    numberHandler.setNumber(number);
    irrationalHandler.setNumber(number);
    let positionsAndSums = irrationalHandler.getPositionAndSums();
    if (undefined === index) index = this.getIndex(numberHandler);

    if (-1 === index) {
        if (numberHandler.numberProperties.prime !== -1) index = numberHandler.numberProperties.prime;
        else index = numberHandler.numberProperties.composite;
    }

    return [
        {
            'index': index,
            'composite' : numberHandler.numberProperties.composite,
            'number' : number,
            'PI' : true === irrationalHandler.irrationalToggles['PI'] ? [ positionsAndSums.PI[0], positionsAndSums.PI[1] ] : [],
            'PHI' : true === irrationalHandler.irrationalToggles['PHI'] ? [ positionsAndSums.PHI[0], positionsAndSums.PHI[1] ] : [],
            'EULER' : true === irrationalHandler.irrationalToggles['EULER'] ? [ positionsAndSums.EULER[0], positionsAndSums.EULER[1] ] : [],
            'SQRT2' : true === irrationalHandler.irrationalToggles['SQRT2'] ? [ positionsAndSums.SQRT2[0], positionsAndSums.SQRT2[1] ] : [],
            'SQRT3' : true === irrationalHandler.irrationalToggles['SQRT3'] ? [ positionsAndSums.SQRT3[0], positionsAndSums.SQRT3[1] ] :[],
            'SQRT5' : true === irrationalHandler.irrationalToggles['SQRT5'] ? [ positionsAndSums.SQRT5[0], positionsAndSums.SQRT5[1] ] : [],
            'SQRT7' : true === irrationalHandler.irrationalToggles['SQRT7'] ? [ positionsAndSums.SQRT7[0], positionsAndSums.SQRT7[1] ] : [],
            'LEMNI' : true === irrationalHandler.irrationalToggles['LEMNI'] ? [ positionsAndSums.LEMNI[0], positionsAndSums.LEMNI[1] ] : [],
            'ZETA' : true === irrationalHandler.irrationalToggles['ZETA'] ? [ positionsAndSums.ZETA[0], positionsAndSums.ZETA[1] ] : [],
            'SUM': [ positionsAndSums['SUM'][0], positionsAndSums['SUM'][1] ],
        }
    ]
}

FactorMatrix.prototype.createMultiplicationCollection = function () {
    let collection = [];

    for (let i = 1; i <= this.depth; i++) {
        let number = i * this.number;
        let row = this.createMatrixRow(number);
        collection.push(row);
    }

    return collection;
}

FactorMatrix.prototype.createCompositesCollection = function () {
    let collection = [];
    let compositeManager = new CompositeManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = compositeManager.getCompositeByIndex(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createPrimesCollection = function () {
    let collection = [];
    let primeManager = new PrimeManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = primeManager.getNthPrime(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createPythagoreanPrimesCollection = function () {
    let collection = [];
    let primeManager = new PrimeManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = primeManager.getNthPythagoreanPrime(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createSemiPrimesCollection = function () {
    let collection = [];
    let primeManager = new PrimeManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = primeManager.getNthSemiPrime(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createTriangularsCollection = function () {
    let collection = [];
    let triangularManager = new TriangularManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = triangularManager.getTriangularByNumber(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createHexagonalsCollection = function () {
    let collection = [];
    let hexagonalManager = new HexagonalManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = hexagonalManager.getNthHexagonal(i);
        let row = this.createMatrixRow(t,i);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createTetrahedralsCollection = function () {
    let collection = [];
    let tetrahedralManager = new TetrahedralManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = tetrahedralManager.getNth(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createOctagonalsCollection = function () {
    let collection = [];
    let octagonalManager = new OctagonalManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = octagonalManager.getNthOcta(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createStarsCollection = function () {
    let collection = [];
    let starnumberManager = new StarnumberManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {
        let t = starnumberManager.getNthStarnumber(i);
        let row = this.createMatrixRow(t, i);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createLucasCollection = function () {
    let collection = [];
    let lucasManager = new LucasManager();

    for (let i = this.number; i < (this.depth + this.number); i++) {

        let t = lucasManager.getNthLucas(i);
        let row = this.createMatrixRow(t);
        collection.push(row)
    }

    return collection;
}

FactorMatrix.prototype.createCustomRangeCollection = function (range) {
    let collection = [];

    for (let i = 0; i <= range.length; i++) {
        let row = this.createMatrixRow(range[i]);
        collection.push(row);
    }

    return collection;
}

FactorMatrix.prototype.createFactorCollection = function () {

    let matrixType = $('#factorMatrixTypeSelector').val();

    switch (matrixType) {
        case 'composites':
            this.collection = this.createCompositesCollection();
            break;
        case 'primes':
            this.collection = this.createPrimesCollection();
            break;
        case 'pythagorean-primes':
            this.collection = this.createPythagoreanPrimesCollection();
            break;
        case 'semi-primes':
            this.collection = this.createSemiPrimesCollection();
            break;
        case 'triangulars':
            this.collection = this.createTriangularsCollection();
            break;
        case 'hexagonals':
            this.collection = this.createHexagonalsCollection();
            break;
        case 'octagonals':
            this.collection = this.createOctagonalsCollection();
            break;
        case 'tetrahedrals':
            this.collection = this.createTetrahedralsCollection();
            break;
        case 'stars':
            this.collection = this.createStarsCollection();
            break;
        case 'lucas':
            this.collection = this.createLucasCollection();
            break;
        case '19phirange':
            this.collection = this.createCustomRangeCollection([66, 123, 854, 3109, 2194, 516, 2858, 15163, 132379, 52579, 55757, 21280, 105572, 123446, 415496, 2396077, 846334, 62500, 567, 526]);
            break;
        case '19pirange':
            this.collection = this.createCustomRangeCollection([96, 180, 3664, 24717, 15492, 84198, 65489, 3725, 16974, 41702, 3788, 5757, 1958, 14609, 62892, 44745, 9385, 169, 40, 70]);
            break;
        case '3pirange':
            this.collection = this.createCustomRangeCollection([19, 37, 46]);
            break;
        case '4phirange':
            this.collection = this.createCustomRangeCollection([1000, 2796, 6336, 2107]);
            break;
        case 'multiplication':
        default:
            this.collection = this.createMultiplicationCollection();
            break;
    }
}
