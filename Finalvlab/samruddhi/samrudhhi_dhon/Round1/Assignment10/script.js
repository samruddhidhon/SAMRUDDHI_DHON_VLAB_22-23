function parseMatrix(matrixString) {
    return matrixString.trim().split('\n').map(row => row.split(' ').map(Number));
}

function performMatrixAddition() {
    const matrix1Str = document.getElementById("matrix1").value;
    const matrix2Str = document.getElementById("matrix2").value;

    const matrix1 = parseMatrix(matrix1Str);
    const matrix2 = parseMatrix(matrix2Str);

    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        document.getElementById("additionResult").textContent = "Matrices must have the same dimensions for addition.";
        return;
    }

    const resultMatrix = new Array(matrix1.length);
    for (let i = 0; i < matrix1.length; i++) {
        resultMatrix[i] = new Array(matrix1[0].length);
        for (let j = 0; j < matrix1[0].length; j++) {
            resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    document.getElementById("additionResult").textContent = "Matrix Addition Result:\n" + resultMatrix.map(row => row.join(' ')).join('\n');
}

function findMatrixTranspose() {
    const matrixTransposeStr = document.getElementById("matrixTranspose").value;

    const matrix = parseMatrix(matrixTransposeStr);

    const transposeMatrix = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        transposeMatrix[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    document.getElementById("transposeResult").textContent = "Matrix Transpose Result:\n" + transposeMatrix.map(row => row.join(' ')).join('\n');
}
