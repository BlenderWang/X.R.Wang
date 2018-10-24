//Uppgift 1
function Person(namn, epost, mobil) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = {
        gatuadress: '',
        postnummer: '',
        ort: ''
    };
    this.print = function() {
        return this.namn + "\n" + this.adress.gatuadress + "\n" + this.adress.postnummer + "" + this.adress.ort ;
        /*`${this.namn}
${this.adress}`;*/
    };
}

const mahmud = new Person('Mahmud Al Hakim', 'mahmud.al.hakim@nackademin.se', '070 000 12 34');
/*mahmud.adress = `Hemfridsvägen 17
192 67 Sollentuna`;*/
mahmud.adress.gatuadress = 'Hemfridsvägen 17';
mahmud.adress.postnummer = '192 67';
mahmud.adress.ort = 'Sollentuna';
mahmud.print();
console.log(mahmud.print());

const jane = new Person('Jane Doe', 'jane.doe@gmail.com', '010 235 48 79');
/*jane.adress = `Randomstreet 554
159 78 Candyland`;*/
jane.adress.gatuadress = 'Randomstreet 554';
jane.adress.postnummer = '159 78';
jane.adress.ort = 'Candyland';

const printJane = jane.print();
console.log(printJane);
console.log(jane.epost);

//Övning 2
function hypotenusa(a, b) {
    const c = Math.sqrt(a*a + b*b);
    return c;
}

console.log('Resultat är: ' + hypotenusa(12, 5));

//Övning 3
const r = prompt('Skriv en cirkels radie:');

function calc() {
    const omkrets = Math.round(2 * Math.PI * r);
    const area = Math.round(Math.PI * r * r);
    return [omkrets, area];
}

console.log(calc());

//Övning 4
function sphere(r) {
    const volumn = Math.round((4 * Math.PI * Math.pow(r, 2)) / 3);
    const area = Math.round(4 * Math.PI * Math.pow(r, 2));
    return [volumn, area];
}

console.log(sphere(4));