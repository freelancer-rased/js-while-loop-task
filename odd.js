/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let number = 61;
let oddNumber = number % 2 === 1;

while (number <= 100){
    if(number % 2 === 1){
        console.log(number)
    }
    number++
}