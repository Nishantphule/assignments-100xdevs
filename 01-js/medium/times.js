/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Get the start time
    let startTime = new Date().getTime();

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the end time
    let endTime = new Date().getTime();

    // Calculate the time taken in seconds
    let timeTaken = (endTime - startTime) / 1000;

    return [timeTaken,sum];
}

// Running the function for different values of n
let n = calculateTime(100)
let n2 = calculateTime(100000)
let n3 = calculateTime(10000000000)

console.log("Time to sum from 1 to 100:", n[0], "seconds", "sum: ",n[1]);
console.log("Time to sum from 1 to 100000:", n2[0], "seconds", "sum: ",n2[1]);
console.log("Time to sum from 1 to 1000000000:", n3[0], "seconds", "sum: ",n3[1]);