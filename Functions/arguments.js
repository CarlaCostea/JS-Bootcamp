//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(2, 3, 4)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 88)
console.log(scoreText)

// Challenge 9

let getTip = function (total = 0, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tip = getTip(100)
console.log(tip)