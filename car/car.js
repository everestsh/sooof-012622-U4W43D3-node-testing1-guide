// Build a Car class!
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
    }

    drive(...distance) {
        for(let d of distance) {
            this.odometer += d;
        }
    }

    driveAsync(distance) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.odometer += distance;
                resolve();
            }, 50 * distance);
        });
    }
}

setTimeout(() => {
    console.log('hello')
}, 5 );

const pp = new Promise( resolve=>{
    console.log("resolve")
    resolve();
})
pp.then()

let p = Promise.resolve(5)
f(p)
function f(p){
    p.then(value => console.log(value))
}


let car = new Car('Tesla', 'Model S');
car.driveAsync()
    .then(() => {
        console.log("car  make")
    })


module.exports = Car