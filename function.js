function addNums(a,b){
    c =a+b;
    console.log(c);
}

addNums(109,20);
console.log(c);

const getAvg = function( m1, m2, m3){
    console.log ((m1+m2+m3)/3);
    let avg = (m1+m2+m3)/3
    return avg

}
 const result = getAvg (78,89,91)
 console.log(result);

 const factorial = (n) =>{
    let f=1;
    for(let i=2; i<=n;i++){
        f*=i
    }
    return f;
 }
const fact6 =factorial(6);
console.log(fact6);
console.log(25 ** 0.5);

// check the number is perfect square is not
let m= 35;
let sqrt = m**0.5;
console.log(sqrt);
console.log(sqrt ===parseInt(sqrt));
console.log(Number.isInteger(sqrt));

const checkPerfectsquare = (num)=>{
    let s= num**0.5;
    return s === parseInt(s);
}