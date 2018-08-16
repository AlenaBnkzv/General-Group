function spiral(matrix){
    let result = [];

    let goAroundMatrix = function around(reducedMatrix) {
        if (reducedMatrix.length === 0) {
            return;
        }

        result = result.concat(reducedMatrix.shift());

        for (let i = 0; i < reducedMatrix.length - 1; i++) {
            result.push(reducedMatrix[i].pop());
        }

        const popArr = reducedMatrix.pop();
        if (popArr){
            result = result.concat(popArr.reverse());
        }

        for (let i = reducedMatrix.length - 1; i > 0; i--) {
            result.push(reducedMatrix[i].shift());
        }

        return around(reducedMatrix);
    };

    goAroundMatrix(matrix);

    return result;
};
