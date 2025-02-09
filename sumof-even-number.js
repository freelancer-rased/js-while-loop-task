// Find and display the sum of all even numbers between 50 and 100 using a while loop.

let i = 50;
let sum = 0;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log("Even Number is ", i);
    sum = sum + i;
}
i++
}
console.log("The total sum of even number is " ,sum)
