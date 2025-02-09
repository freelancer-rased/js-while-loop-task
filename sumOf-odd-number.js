// Find and display the sum of all odd numbers from 35 to 85 using a while loop.


let i = 35;
let sum = 0;
while (i <= 85){
    if(i % 2 === 1){
        console.log(i);
        sum = sum + i;
        console.log("the total sum is ", sum)
    }
    i++
}
