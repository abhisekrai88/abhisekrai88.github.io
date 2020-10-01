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
function Cars(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
}

function suv(brand, model, engine, fourWheelDrive) {
  Cars.call(this, brand, model, engine);
  this.fourWheelDrive = fourWheelDrive;
}

function mpv(brand, model, engine, seater) {
  Cars.call(this, brand, model, engine);
  this.seater = seater;
}

function hatchBack(brand, model, engine,)
