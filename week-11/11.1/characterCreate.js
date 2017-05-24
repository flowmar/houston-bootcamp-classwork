// A constructor begins with a capital letter
function Character(name, profession, gender, age, strength, hitpoints) {
    // this is used to define the object's properties and values
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    // this is also used to create methods to be used by the object
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
            "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength +
            "\nHitpoints: " + this.hitpoints);
    };

    this.isLiving = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is alive!");
            return true;
        } else {
            console.log(this.name + "is dead!");
            return false;
        }
    }

    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    }

    this.levelUp = function() {
        this.age += 1;
        this.strength += 10;
        this.hitpoints += 50;
    }
}
// In order to write a method for a particular object, you declare a function within the constructor

// declare variables and create new characters from the object contructor with the 'new' keyword
var wizard = new Character('Meyorg Friedman', 'Villian', 'Male', 400, 89, 1000);
var zombie = new Character('Legume', 'Alchemist', '???', 19, 31, 1060);

// log the objects to the console
console.log(wizard);
console.log(zombie);


//  printStats of both characters
wizard.printStats();
console.log();
zombie.printStats();

// one character attacks another
zombie.attack(wizard);
console.log();

// printStats to see new hitpoints value
wizard.printStats();
wizard.isLiving();

// zombie levels up and its stats increase
zombie.levelUp();
console.log();
zombie.printStats();