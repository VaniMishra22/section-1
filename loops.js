for(let i=0; i<=10; i++){
    console.log(i);
}

// print all numbers divisible 7 and 11 from
// 100 to 350

for(let i=100; i==350; i++){
    if(i%7 === 0 && i%11 === 0) {
        console.log(i);
    }
}

const fruits =['apple', 'litchi', 'guava', 'mango', 'grapes'];

for(let f of fruits){
    console.log(f);
}

let a = 10;
while(a<20){
    console.log(a);
    a+=2;
}
let b = 10;
do {
    console.log(b);
} while (b > 20)