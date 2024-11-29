// For natural
let str = "";

for (let i = 0; i < 9; i++) { // Se ocupa cuando trabajas con numeros o con arreglos

    console.log(`El valor del indexador: ${i}`);

    console.log(`El valor de str (antes de modificarlo): ${str}`);
    str = str + i;
    console.log(`El valor de str (despues de modificarlo): ${str}`);
    // i = i + 1;
}

// Con numeros 
let processedUserAmount = 100; 
let finalValue = 1000;

for(let i = processedUserAmount; i < finalValue; i++){
    let msg = "Holi";
    console.log(`Index: ${i}`);
    console.log(`Send a message to someone : ${msg}`);
}

// Con arreglos 
let person1 = {
    name: "Erwin",
    age: 35
};

let person2 = {
    name: "Daniel",
    age: 45
};


let people = [person1, person2];
// indices    : 0    1    2    3    4    5
//           [ "a", "b", "c", "d", "e", "f"]
people.push( {
    name: "Fernando", 
    age: 40
});

// Calcular la edad promedio del grupo de personas : ? 
let total = 0;
for(let i=0; i < people.length; i++){
    console.log("Cuerpo del for :" + i);

    let p = people[i];

    total = total + p.age;
}

console.log("Las edades sumadas dan: " + total);
console.log("La edad promedio es: " + (total/people.length));

// ForEach 
let total2 = 0;
let opt = function(element) {
    console.log(element.name);
    total2 +=element.age;
};

people.forEach(opt);
console.log(total2);

let total3 = 0;
people.forEach((element, index) => {
    console.log("Index: " + index);
    total3 += element.age;
});

console.log(total3);

// For In 
let profile = {
    name: "ERwin",
    age: 35, 
    city: "Santiago", 
    nationality: "Chilean", 
    dateOfBirth: "01/01/2025",
    profession: "teacher"
};

for (const property in profile) {

    let value = profile[property];

    console.log(`La propiedad ${property} tiene valor : ${value}`);
}


// Diagrama de ejecución 

// Primera iteración 
// Valores de las variables en el cuerpo del for: 
// i = 0, str = ""