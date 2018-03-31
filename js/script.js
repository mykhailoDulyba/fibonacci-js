// for (let i = 100; i > 0; i--) {
//     if (i % 2) {
//         continue;
//     }
//     prn(i);
// }

// let correctData = false;
// let someNum;
// while (!correctData) {
//     someNum = parseFloat(prompt('Enter a number'));
//     if (!isNaN(someNum)) {
//         correctData = true;
//     }
// }



// let correctData = false;
// let someNum;
// do {
//     someNum = parseFloat(prompt('Enter a number'));
//     if (!isNaN(someNum)) {
//         correctData = true;
//     }
// } while (!correctData);


function prn(val) {
    document.write(val + '<br>');
}

// function getAge(age) {
//     // if (age >= 18) {
//     //     return 'Adult';
//     // } 
//     // return 'Young';
//     return age >= 18 ? 'Adult' 
//             : age < 0 ? 'Incorrect' : 'Young';
// }

// prn(getAge(20));
// prn(getAge(-20));
// prn(getAge(2));

// let cars = ['Bugatti Veyron', 'Ferrari F50', 'McLaren F1',
//     'ZAZ Lanos'];
    
// prn(cars.length);

// cars.unshift('Tesla Model X');

// prn(cars.length);

// // for (let i = 0; i < cars.length; i++) {
// //     if (cars[i] === undefined) {
// //         continue;
// //     }
// //     prn(cars[i]);
// // }

// // cars.forEach(prn);

// cars.sort();
// cars.reverse();

// cars.forEach( function(el, idx) {
//     prn(idx + ' ' + el);
// });

// // cars.forEach( (el, idx) => prn(idx + ' ' + el) );

// let nums = [10,30,3,1,11,17,80,100,59];
// prn(nums);
// nums.sort( (a, b) => b - a );
// prn(nums.join('<br>'));


// let seasonCars = {};

// seasonCars['Summer'] = 'Audi TT Cabrio';
// seasonCars['Winter'] = 'Hummer H2';
// seasonCars['Spring'] = 'Abrams A1';
// seasonCars['Autumn'] = 'ZAZ Lanos';

// // prn(seasonCars.length);

// let counter = 0;
// for (let key in seasonCars) {
//     //counter++;
//     prn(seasonCars[key]);    
// }
// prn(counter);

function beep () {
   prn(this.model + ': ' + 'Beep'); 
}

let car = {};
car.make = 'Audi'; // car['make'] = 'Audi';
car.model = 'TT Cabrio';
car.color = 'red';
car.price = 50000;
car.beep = beep;
car.beep();

let hummer = {};
hummer.model = 'H2';
hummer.beep = beep;
hummer.beep();

let lanos = {
    model: 'Lanos',
    make: 'ZAZ',
    color: 'grey',
    beep: beep
}
lanos.beep();

function Car(model, make, color) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.beep = beep;
    return this;
}

let mcLaren = new Car('F1', 'McLaren', 'silver');
let ferrariF50 = new Car('F50', 'Ferrari', 'red');
mcLaren.beep();
ferrariF50.beep();

class SuperCar {
    constructor (model, make, color) {
        this.model = model;
        this.make = make;
        this.color = color;
    } 
    beep() {
       prn(this.model + ': ' + 'Beep-beep');  
    }
}

let bugattiVeyron = new SuperCar('Veyron', 'Bugatti', 'grey');
bugattiVeyron.beep();

let bugattiChiron = Object.create(bugattiVeyron);
bugattiChiron.model = 'Chiron';
bugattiChiron.beep();




