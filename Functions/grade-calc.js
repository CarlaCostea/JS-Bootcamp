// student score, total possible score
// example 15/20  -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D60 69, F 0-59

const grade = function (score, maxScore) {
    if (isNaN(score) || isNaN(maxScore)) {
        throw Error ('The grades must be numeric values')
    } else {
        let result;
        const percentage = score / maxScore * 100;

        if (percentage < 60) {
            result = 'F'
        } else if (percentage < 70) {
            result = 'D'
        } else if (percentage < 80) {
            result = 'C'
        } else if (percentage < 90) {
            result = 'B'
        } else {
            result = 'A'
        }
        return `You got a ${result} (${percentage}% ) !`
    }
}

try {
    const gradeCalc = grade(15, 'bgf');
    console.log(gradeCalc);
} catch (e) {
    console.log(e.message)
}


