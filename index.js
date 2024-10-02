//Code your solutions in this file
//Question 1
const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i += 1) {
        console.log(i)     
    }
}

console.log (fiveToOneHundred())

//Question 2

const multiplesOfThree = () => {
    let threes = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            threes.push(i)
        }
    }
    return threes
}

console.log(multiplesOfThree())

// Question 3

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        } 
    }
    return
}
console.log (multiplesOfThreeOrFive())

// Question 4

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
    return
}

untilNum(36);