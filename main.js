alert("Hello World, I'm Mila Data!");

let name = "Mila Data";
let height = 1.65;

const age = 21;

console.log(name);
console.log(age);
console.log(height);

let concatenate = "Hello, my name is " + name + " and I am " + age + " years old.";

let  data = document.querySelector("#data");
data.innerHTML = 
    `<hr/>
    <h1> I'm the data box </h1>
    <h2> ${concatenate} </h2>
    <h3> I measure ${height} . </h3>
`;

height = 1.60;
if (height >= 1.65) {
    data.innerHTML += "<h1> I am tall </h1>";
}
else {
    data.innerHTML += "<h1> I am short </h1>";
}

for (let year = 2000; year <= 2023; year++) {
    data.innerHTML += "<h1> I will be " + (year - 1999) + " years old in " + year + " </h1>";
}

let names = ["Mila", "Data", "Jean Luc", "Q"];

let divNames = document.querySelector("#names");

divNames.innerHTML = names [1];

divNames.innerHTML = "<h1> List names </h1><Ul>";

names.forEach(name => {
    divNames.innerHTML += "<li>" + name + "</li>";
});

divNames.innerHTML += "</Ul>";

const myInfo = (name, height) => {
    let myInfo = `
    <hr/>
    <h1> My Info </h1>
    <h2> My name is ${name} </h2>
    <h3> I measure ${height} </h3>
    `;
    return myInfo;
    
}


const print = () => {
    let divPrint = document.querySelector("#print");
    data.innerHTML = myInfo("Mila Data", 1.65);
};

print();










