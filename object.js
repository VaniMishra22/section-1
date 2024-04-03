const user = { name: 'Vani', email: 'vani22@gmail.com', password: 'vani0602' };
console.log(user.name);
console.log(user.email);
console.log(user['password']);
let key = 'name';

console.log(user[key]);

user.password = 'abrakadabra';
console.log(user);
user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'Samsung',
    model : 'S24',
    price : 149999,
    colors : ['white', 'black', 'green']
};

console.log(smartphone.price);
console.log(smartphone.colors[1]);

const smartphoneList =[
        {brand : 'Samsung', model : 'S24', price : 149999, colors : ['white', 'black', 'green'] },
        {brand : 'Samsung', model : 'z fold', price : 160000, colors : ['blue'] },
        {brand : 'Poco', model : 'M6', price : 13999, colors : ['black', 'silver', 'blue'] },
        {brand : 'Apple', model : 'Iphone 15', price : 199999, colors : ['white', 'black'] },
        {brand : 'Radmi', model : 'note8 Pro', price : 16000, colors : ['white', 'black', 'blue'] },
]

console.log(smartphoneList.length);
console.log(smartphoneList[0].model);
console.log(smartphoneList[3].price);
console.log(smartphoneList[2].colors[1]);

smartphoneList[4].colors.push('red');
console.log(smartphoneList[1]);