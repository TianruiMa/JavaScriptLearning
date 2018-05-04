// student score, total possible score
// A 90-100
// B 80-89
// C 70-79
// D 69-69
// F 50-59

let gradeCalc = function (score, totalScore = 100) {
    let percent = (score / totalScore) * 100
    if (percent >= 90) return 'A'
    else if (percent >= 80) return 'B'
    else if (percent >= 70) return 'C'
    else if (percent >= 70) return 'D'
    else return 'F'
 }

 let gradeRes = gradeCalc(30)
console.log(`Your grade is ${gradeRes}`)