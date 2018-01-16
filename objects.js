let myCar = {
    make: 'Honda',
    model: 'Civic',
    miles: 3000,
    showInfo: function() {
        console.log(myCar.make, myCar.model);

},
drive: function(add) {
    myCar.miles = myCar.miles + add
}
    
myCar.showInfo();
myCar.drive(80);
//console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}, with ${myCar.miles}.`)



function drive(car, m) {
    console.log(`Odometer: ${car.mile}`)
}

const drive = (car, m) => {
    console
}




