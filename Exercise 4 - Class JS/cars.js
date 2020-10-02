/**
 * Car - Super Class
 * SUV, MPV, Hatchback (type of car)
 *
 * SUV -> Merc GLA, BMW X3 (object of a type)
 *
 * 1. Define the properties and behaviors of each of these classes
 * 2. Create the classes
 * 3. Create the inheritance relationship between the classes
 * 4. Create object of the different types of cars
 *
 */
function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
}

function suv(brand, model, engine, fourWheelDrive) {
  Car.call(this, brand, model, engine);
  this.fourWheelDrive = fourWheelDrive;
}

suv.prototype = new Car();
suv.prototype.constructor = suv;

var mySuv = new suv("Mercedes-Benz", "GLE-Class GLE400", "Petrol", true);
console.log(mySuv);

function mpv(brand, model, engine, seater) {
  Car.call(this, brand, model, engine);
  this.seater = seater;
}

mpv.prototype = new Car();
mpv.prototype.constructor = mpv;

var myMpv = new mpv("BMW", "2 Series Gran Tourer 216d", "Diesel", 7);
console.log(myMpv);

function hatchBack(brand, model, engine, doors) {
  Car.call(this, brand, model, engine);
  this.doors = doors;
}

hatchBack.prototype = new Car();
hatchBack.prototype.constructor = hatchBack;

var hatchBack = new hatchBack("Volkswagen", "Golf Mk8 GTI", "Petrol", 5);
console.log(hatchBack);
