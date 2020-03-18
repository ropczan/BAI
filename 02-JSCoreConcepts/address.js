title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

//bez formatowania
console.log(title + " "  + name + " "+ surname);
console.log("ul. " + street);
console.log(zip + " " + city);
console.log(country.toUpperCase());

//z formatowaniem
let card = `${title} ${name} ${surname}\n` +
    `ul. ${street}\n` +
    `${zip} ${street}\n` +
    `${country.toUpperCase()}\n`;

console.log(card);