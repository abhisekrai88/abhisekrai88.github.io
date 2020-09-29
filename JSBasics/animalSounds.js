function barks() {
  alert("dog barks");
}
function neighs() {
  alert("horse neighs");
}
function meows() {
  alert("cat meows");
}
function Animal(sound) {
  this.sound = sound;
}

function Dog(isDogAPet) {
  this.isDogAPet = isDogAPet;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.barks = function () {
  alert("dogs bark");
};

var dog1 = new Dog(true);
var dog2 = new Dog(false);

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
