function sumOfRange(start, end) {
    return (end - start) * (start + end - 1) / 2;
}

let start = 1;
let end = 11;
console.log(`Sum of numbers from ${start} to ${end} is: ${sumOfRange(start, end)}`);