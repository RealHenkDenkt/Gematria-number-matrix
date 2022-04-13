$(document).ready (function (){
    let
        matrixFactor = $('#matrixFactor'),
        factorHighlights = $('#factorHighlights'),
        factorMatrixTypeSelector = $('#factorMatrixTypeSelector'),
        factorMatrixTogglePrimes = $('#factorMatrixTogglePrime'),
        factorMatrixTogglePythagorean = $('#factorMatrixTogglePythagorean'),
        factorMatrixToggleSemi = $('#factorMatrixToggleSemi'),
        factorMatrixToggleTriangular = $('#factorMatrixToggleTriangular'),
        factorMatrixToggleHexagonal = $('#factorMatrixToggleHexagonal'),
        factorMatrixToggleOctagonal = $('#factorMatrixToggleOctagonal'),
        factorMatrixToggleTetrahedral = $('#factorMatrixToggleTetrahedral'),
        factorMatrixToggleStar = $('#factorMatrixToggleStar'),
        factorMatrixToggleLucas = $('#factorMatrixToggleLucas'),
        factorMatrixToggleFibonacci = $('#factorMatrixToggleFibonacci'),
        factorMatrixShowSums = $('#factorMatrixShowSums'),
        factorMatrixTogglePI = $('#factorMatrixTogglePI'),
        factorMatrixTogglePHI = $('#factorMatrixTogglePHI'),
        factorMatrixToggleEULER = $('#factorMatrixToggleEULER'),
        factorMatrixToggleSQRT2 = $('#factorMatrixToggleSQRT2'),
        factorMatrixToggleSQRT3 = $('#factorMatrixToggleSQRT3'),
        factorMatrixToggleSQRT5 = $('#factorMatrixToggleSQRT5'),
        factorMatrixToggle7 = $('#factorMatrixToggleSQRT7'),
        factorMatrixToggleLEMNI = $('#factorMatrixToggleLEMNI'),
        factorMatrixToggleZETA = $('#factorMatrixToggleZETA'),

        showFactorSums = false;

    factorMatrixShowSums.on('click', function (){
        showFactorSums = false === $(this)[0].checked;
        fillFactorMatrix(matrixFactor.val(), showFactorSums);
    });

    matrixFactor.on('input', function () {
        // Some sanity checks to avoid locking up
        // In case of multiplication table, don't accept numbers > 5000
        let number = parseInt(matrixFactor.val())
        if (isNaN(number)) return;

        if (number > 9000 && factorMatrixTypeSelector.val() === 'multiplication') return;
        if (number > 8000 && factorMatrixTypeSelector.val() === 'pythagorean-prime') return;
        if (number > 750 && factorMatrixTypeSelector.val() === 'triangulars') return;
        if (number > 1000 && factorMatrixTypeSelector.val() === 'hexagonals') return;
        if (number > 200 && factorMatrixTypeSelector.val() === 'stars') return;
        if (number > 1000 && factorMatrixTypeSelector.val() === 'octagonals') return;
        if (number > 90000) return;

        fillFactorMatrix(number, showFactorSums);
    });

    $('' +
        '#factorMatrixTogglePI, ' +
        '#factorMatrixTogglePHI, ' +
        '#factorMatrixToggleEULER, ' +
        '#factorMatrixToggleSQRT2, ' +
        '#factorMatrixToggleSQRT3, ' +
        '#factorMatrixToggleSQRT5, ' +
        '#factorMatrixToggleSQRT7, ' +
        '#factorMatrixToggleLEMNI, ' +
        '#factorMatrixToggleZETA '
    ).on('click', function (){
        showFactorSums = false === $('#factorMatrixShowSums')[0].checked;
        fillFactorMatrix(matrixFactor.val(), showFactorSums);
    });

    factorMatrixToggleHexagonal.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightHexagonals();
        } else {
            factorMatrixManager.clearClass('bold-dark-blue');
        }
    });

    factorMatrixToggleOctagonal.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightOctagonals();
        } else {
            factorMatrixManager.clearClass('bold-blue');
        }
    });

    factorMatrixToggleStar.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightStars();
        } else {
            factorMatrixManager.clearClass('bold-yellow');
        }
    });

    factorMatrixToggleLucas.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightLucas();
        } else {
            factorMatrixManager.clearClass('bold-green');
        }

    });
    factorMatrixToggleFibonacci.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();
        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightFibonacci();
        } else {
            factorMatrixManager.clearClass('bold-purple');
        }
    });

    factorMatrixTogglePrimes.on('click', function (){
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked ) {
            // Highlight
            factorMatrixManager.highlightPrimes();
       } else {
            factorMatrixManager.clearClass('bold-green');
       }
    })

    factorMatrixTogglePythagorean.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightPythagoreanPrimes();
        } else {
            factorMatrixManager.clearClass('bold-green');
        }
    });

    factorMatrixToggleSemi.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightSemiPrimes();
        } else {
            factorMatrixManager.clearClass('bold-orange');
        }
    });

    factorMatrixToggleTriangular.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightTriangulars();
        } else {
            factorMatrixManager.clearClass('bold-yellow');
        }
    });

    factorMatrixToggleTetrahedral.on('click', function () {
        let factorMatrixManager = new FactorMatrixManager();

        if (false === $(this)[0].checked) {
            factorMatrixManager.highlightTetrahedrals();
        } else {
            factorMatrixManager.clearClass('bold-red');
        }
    });


    factorHighlights.on('input', function () {
        setFactorMatrixHighlights();
    });

    factorMatrixTypeSelector.on('change', function () {
        let n = $(this).val();
        let showFactorSums = false === $('#factorMatrixShowSums')[0].checked;
        

        // Clear input to avoid weird behavior
        $('#matrixFactor').val('');
        fillFactorMatrix(n, showFactorSums);
    });
});

function setFactorMatrixCellName (factorMatrix) {
    let cellNames = {
        'multiplication': 'Factor',
        'composites': 'Composite',
        'primes': 'Prime',
        'pythagorean-primes': 'Pythagorean',
        'semi-primes': 'Semi prime',
        'triangulars': 'Triangular',
        'hexagonals': 'Hexagonal',
        'octagonals': 'Octagonal',
        'tetrahedrals': 'Tetrahedral',
        'stars': 'Star',
        '19pirange': 'Sequence PI',
        '19phirange': 'Sequence PHI',
        '3pirange': 'Sequence PI',
        '4phirange': 'Sequence PHI'
    }
    $('#factorTypeCell').html(cellNames[$('#factorMatrixTypeSelector').val()]);

}

function setFactorMatrixHighlights() {
    let factorMatrix = new FactorMatrix();
    factorMatrix.setHighlights();
}

function fillFactorMatrix (number, showFactorSums) {
        if ($('#matrixFactor').val() === '') return;

        let factorMatrix = new FactorMatrix(number, parseInt($('#matrixFactorRows').val())),
        tableBody = '',
        factorMatrixTableBody = $('#factorMatrixTable tbody'),
        factorMatrixTableDynamicRow = $('#factorMatrixTableDynamicRow');

    // get and set header
    factorMatrixTableDynamicRow.html(factorMatrix.getHeader());

    factorMatrixTableBody.html('');

    for (let i = 0; i < factorMatrix.collection.length; i++) {
        let tableRow = '<tr>';
        let data = factorMatrix.collection[i][0];
        tableRow += '<td class="factor-matrix-cell">' + (i+1)  + '</td>';
        tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.index + '">' + data.index + '</span></td>';
        tableRow += '<td><span class="factor-matrix-cell fixed-bold" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.number + '">' + data.number + '</span></td>';

        let irrationalHandler = new IrrationalHandler();
        irrationalHandler.checkToggled();

        if (true === showFactorSums) {

            if (true === irrationalHandler.irrationalToggles['PI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PI[0] + '">' + data.PI[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['PI']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PI[1] + '">'  + '(' + data.PI[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['PHI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PHI[0] + '">' + data.PHI[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['PHI']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PHI[1] + '">' + '(' + data.PHI[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['EULER']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.EULER[0] + '">' + data.EULER[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['EULER']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.EULER[1] + '">' + '(' + data.EULER[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['SQRT2']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT2[0] + '">' + data.SQRT2[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['SQRT2']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT2[1] + '">' + '(' + data.SQRT2[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['SQRT3']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT3[0] + '">' + data.SQRT3[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['SQRT3']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT3[1] + '">' + '(' + data.SQRT3[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['SQRT5']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT5[0] + '">' + data.SQRT5[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['SQRT5']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT5[1] + '">' + '(' + data.SQRT5[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['SQRT7']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT7[0] + '">' + data.SQRT7[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['SQRT7']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT7[1] + '">' + '(' + data.SQRT7[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['LEMNI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.LEMNI[0] + '">' + data.LEMNI[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['LEMNI']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.LEMNI[1] + '">' + '(' + data.LEMNI[1] + ')</span></td>';
            if (true === irrationalHandler.irrationalToggles['ZETA']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.ZETA[0] + '">' + data.ZETA[0] + '</span>';
            if (true === irrationalHandler.irrationalToggles['ZETA']) tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.ZETA[1] + '">' + '(' + data.ZETA[1] + ')</span></td>';
            tableRow +='<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SUM[0] + '">' + data.SUM[0] + '</span>';
            tableRow += '<span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SUM[1] + '">' + '(' + data.SUM[1] + ')</span></td>';
        } else {
            if (true === irrationalHandler.irrationalToggles['PI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PI[0] + '">' + data.PI[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['PHI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.PHI[0] + '">' + data.PHI[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['EULER']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.EULER[0] + '">' + data.EULER[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['SQRT2']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT2[0] + '">' + data.SQRT2[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['SQRT3']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT3[0] + '">' + data.SQRT3[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['SQRT5']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT5[0] + '">' + data.SQRT5[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['SQRT7']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SQRT7[0] + '">' + data.SQRT7[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['LEMNI']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.LEMNI[0] + '">' + data.LEMNI[0] + '</td>';
            if (true === irrationalHandler.irrationalToggles['ZETA']) tableRow += '<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.ZETA[0] + '">' + data.ZETA[0] + '</td>';
            tableRow +='<td><span class="factor-matrix-cell" data-toggle="modal" data-target="#factorMatrixModal" data-totals="' + data.SUM[0] + '">' + data.SUM[0] + '</span></td>';
        }

        tableBody += tableRow;
    }

    factorMatrixTableBody.html(tableBody);
    factorMatrix.setHighlights();
    factorMatrix.setModalClicks();
    setFactorMatrixCellName(factorMatrix);
}