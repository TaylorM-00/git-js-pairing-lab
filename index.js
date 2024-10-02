//Code your solutions in this file
const multiplesOfThree = () => {
    let threes = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            threes.push(i)
        }
    }
    return threes
}

console.log(multiplesOfThree());