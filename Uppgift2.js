/*Uppgifg 1
const tal1 = prompt('Ange ett nummer:');
const tal2 = prompt('Ange ett annat nummer:');

alert(`Resultatet av multiplikation är ${tal1 * tal2}`);

alert(`Resultatet av division är ${tal1 / tal2}`);
*/

//Uppgift2
/*
const width = prompt('Hur bredd är rektanglen?');
const height = prompt('Hur hög är rektanglen?');

function area() {
    document.write(`Rektanglens area är ${width * height} kvadratmeter.`);
}

function circumference() {
    document.write(`Rektanglens omkretsen är ${width * 2 + height * 2} meter.`);
}

area();
document.write('<br />');
circumference();
*/
//Uppgift 3
/*
const tempFahrenheit = prompt('Ange idags temperatur i Fahrenheit');

function toCelsius() {
    const celcius = Math.round((5 / 9) * (tempFahrenheit - 32));
    document.write(`Temperaturen idag är ${celcius} grader Celcius`);
}

toCelsius();
*/
//Uppgift 4
/*
const elevator = {
    level: 0,
    goTo: function(level) {
        this.level = level;
        console.log(`Hissen åker till plan ${level}`);
    },
    where: function() {
        return this.level;
    }
};

elevator.goTo(5);
elevator.where();
console.log(`Hissen är på plan ${elevator.level} just nu`);*/
function foo(param1, param2) {
    console.log(`Param 1 + Param 2 är ${param1 + param2}.`);
}
foo(3, 5);

function someValues(value1, value2, value3) {
    value1 = "It";
    value2 = "is";
    value3 = "alive";
    return [value1, value2, value3];
};
console.log(someValues);