const yargs = require('yargs');
// zgodnie z dokumentacją biblioteki, aby wywołać przeparsowanie parametrów wejściowych (node app.js --name=Adam --lastName=Mickiewicz)
const args = yargs.argv;

// w celu zademonstrowania wyświetlamy w konsolu przeparsowany obiekt
//console.log(args);
// dla porówniania tablica parametrów wejściowych wygląda następująco:
//console.log(process.argv);

const fs = require('fs');

const user = {                                       //zapamietanie nowych danych z parametrów
    name: args.name,
    lastName: args.lastName
};

const data = fs.readFileSync('./plik.txt', 'utf8');  //odczyt z pliku
const databases = JSON.parse(data);                  //zapis do obiektu

console.log(databases.name);                         //wypisuje odczytane imię

fs.writeFileSync('plik.txt', JSON.stringify(user))   //zapis do pliku mowych danych z obiektu user
