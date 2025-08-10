const pen = { brand: 'econo', price: 10, color: 'black' }
console.log(pen);


const pencil = new Object();
pencil.brand = 'Nataraj';
pencil.price = 10;
pencil.isNew = true;
console.log(pencil);


// const rubber = Object.create(null);
const rubber = Object.create({});
rubber.brand = "metador";
rubber.color = "red";


console.log(rubber);

// using class or function
// using new keyword


// this code does not work
var orgObject = {
    company: 'ABC Crop'
};
const employee = Object.create(orgObject);
console.log(employee);
