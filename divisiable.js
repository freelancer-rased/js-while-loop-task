// Find Numbers Divisible by Both 3 and 5
// Print numbers from 1 to 100 that are divisible by both 3 and 5.

let i = 1;
while (i <= 100){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
    i++;
}