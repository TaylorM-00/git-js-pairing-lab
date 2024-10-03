//Code your solutions in this file
//Question 1
// const fiveToOneHundred = () => {
//     for (let i = 5; i < 101; i += 1) {
//         console.log(i)     
//     }
// }

// console.log (fiveToOneHundred())

// //Question 2

// const multiplesOfThree = () => {
//     let threes = [];

//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             threes.push(i)
//         }
//     }
//     return threes
// }

// console.log(multiplesOfThree())

// // Question 3

// const multiplesOfThreeOrFive = () => {
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0 || i % 5 === 0) {
//             console.log(i)
//         } 
//     }
//     return
// }
// console.log (multiplesOfThreeOrFive())

// // Question 4

// const untilNum = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }
//     return
// }

// untilNum(36);

// // Question 5
// const multiply = (num1, num2) => {
//      return num1 * num2
// }
// console.log(multiply(2,4))
// console.log(multiply(10,-5))
// console.log(multiply(3,7.5))

// //Question 6

//  const add = (num1, num2) => {
//     if (num1 !== num2) {
//         return num1 + num2;
//     } else {
//         return 3 * (num1 + num2);
//     }
//  }
//  console.log(add(5, 5));
//  console.log(add(4, 5));
//  console.log(add(10, 5.9));


 // Question 8

 const triangleArea = (h, b) => {
    return (b * h) / 2
 }
 console.log(triangleArea(5, 7))
 console.log(triangleArea(6, 8))

 //Question 10

 const largest = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
 }
 console.log(largest(4, 6, 8))
 console.log(largest(30, 22, 17))
 console.log(largest(4, 108, 86))