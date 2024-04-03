const nums = [4, 5, 6, 7, 8, 9];

const newNums = [];
for(let n of nums){
    //console.log(n ** 3);
    newNums.push(n ** 3);
}

console.log(newNums);

const newArr = nums.map( (a) => { return a**3 } );
console.log(newArr);

const names = ["rushabh", "tejal", "praneet", "anny", "vani", "shreyshri", "tavishi"];

console.log( 'abc'.toUpperCase() );
const upperCaseName = names.map( (n) => {return n.toUpperCase() } );

console.log(upperCaseName);