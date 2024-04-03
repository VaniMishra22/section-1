const myarr =['xyz','456',6789,true,undefined];

console.log(myarr);
console.log(Array.isArray(myarr));

const movies = ['Godzilla','Deadpool','Dark Knight','Spiderman','Animal'];

console.log(movies.length);
//indexing
console.log(movies[3]);
console.log(movies.indexOf('Deadpool'));
console.log(movies[50]);
//movies[50] = 'Flash'
console.log(movies[50]);
console.log(movies[-1]);
console.log(movies.at(-2));
console.log(movies.at(4));
console.log(movies[movies.length-1]);

//slicing

console.log(movies.slice(1));
console.log(movies.slice(1,40));
console.log(movies.slice(40,1));
console.log(movies.slice(0,50));
console.log(movies.slice(-3,-4));
console.log(movies.slice(-4,-1));

//adding and removing elements
movies.push('jani dushman');// adds element at the end of aaray
console.log(movies); 
movies.unshift('echo');// adds element at the start
console.log(movies);
movies.shift();// remove from start of the array
console.log(movies);

movies.splice(3,2);//remove ele3ments after 3 index 2 elements
console.log(movies);

movies.splice(2)
console.log(movies);// removes all the elements after index 2

movies.splice(2,2);
console.log(movies);

movies.splice(2,2,'Batman','Superman')
console.log(movies);

movies.splice(2,0,'Aquaman');
console.log(movies);

movies.splice(2,2,'ghhjf')
console.log(movies);
movies.splice(3,0,'Aquaman');
console.log(movies);

for( let i=0; i<movies.length;i++){
    console.log(movies[i]);
}

for(let mov of movies){
    console.log(mov);
}