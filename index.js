//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i += 1) {
        console.log(i)     
    }
}

console.log (fiveToOneHundred())
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
