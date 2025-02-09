// Find and display all even numbers from 120 to 150 using a while loop.

// let i = 120;
// while (i <= 150){
//     console.log("The evenn number is ", i)
//     i +=2;
// }

// Alternative 
let i = 120;
while (i <= 150){
    if (i % 2 ===0){
        console.log("The even number is ", i);
    }
    i++;
}