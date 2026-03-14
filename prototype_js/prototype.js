// luodaan alkuperäinen animal-olio ja sen metodi
const animal = {
  animal_sound() {
    console.log(this.name + " pitää ääntä.");
  },
};

// animal oliolla ei ole vielä nimi ominaisuutta, joten undefined
animal.animal_sound();

// luodaan doggy-olio, joka käyttää prototyyppinään animal-oliota
// .create() luo prototyyppi linkin, .assign() tekisi vain kopion

const doggy = Object.create(animal);

// lisätään doggy-oliolle nimi-ominaisuus ja oma ääni-metodi
doggy.name = "Doggy";

doggy.doggy_sound = function () {
  console.log(this.name + ": Hau!");
};

// testataan doggy-olion metodeja
doggy.animal_sound();
doggy.doggy_sound();

console.log("Onko animal sama kuin doggy?");
console.log(animal === Object.getPrototypeOf(doggy));

// muokataan alkuperäistä animal-oliota, tässä siis lisätään ylimmälle prototyypille uusi metodi
animal.animal_sound2 = function () {
  console.log(this.name + ": Meow!");
};
// lisätään animal olioon legs ominaisuus
animal.legs = 4;

// jos alussa olisi luotu kopio, alkuperäiselle prototyypille tehdyt muutokset eivät näkyisi
// doggy-oliolla on nyt kaikki vanhat ja vain animal-olioon lisätyt ominaisuudet ja metodit
doggy.animal_sound();
doggy.doggy_sound();
doggy.animal_sound2();
console.log(doggy.name + " oliolla on " + doggy.legs + " jalkaa.");
// ears ominaisuutta ei ole määritelty -> undefined
console.log(doggy.name + " oliolla on " + doggy.ears + " korvaa.");

// luodaan lopuksi puppy-olio jonka prototyyppi on doggy
const puppy = Object.create(doggy);
puppy.name = "Puppy";
puppy.puppy_sound = function () {
  console.log(this.name + ": Puppysoundi!");
};
// puppy-olio voi käyttää sekä doggy että animal metodeja ja ominaisuuksia
puppy.animal_sound();
puppy.doggy_sound();
puppy.animal_sound2();
puppy.puppy_sound();
console.log(puppy.name + " oliolla on " + puppy.legs + " jalkaa.");

console.log("\nSHADOWING");
console.log("Doggy oliolle annetaan legs-ominaisuus");
// doggy oli onnettomuudessa ja sille annettiin oma legs ominaisuus, joka varjostaa/shadowing/(ylikirjottaa)
// prototyypiltä saadun legs = 4 ominaisuuden arvon
doggy.legs = 3;

// animal oliolla on edelleen 4 jalkaa, mutta doggy ja sitä prototyyppinään käyttävä puppy
// ovat nyt 3 jalkaisia
console.log(animal.name + " oliolla on " + animal.legs + " jalkaa.");
console.log(doggy.name + " oliolla on " + doggy.legs + " jalkaa.");
console.log(puppy.name + " oliolla on " + puppy.legs + " jalkaa.");

// näyttää onko ominaisuus OMA vai peritty prototyypiltä
console.log(
  doggy.name + " oliolla on legs ominaisuus: " + doggy.hasOwnProperty("legs"),
); // true  — doggy omistaa sen itse
console.log(
  puppy.name + " oliolla on legs ominaisuus: " + puppy.hasOwnProperty("legs"),
); // false — puppy lukee doggy:ltä

console.log("Poistetaan doggy oliolta legs-ominaisuus");
// doggyn oma
delete doggy.legs;

console.log(animal.name + " oliolla on " + animal.legs + " jalkaa.");
console.log(doggy.name + " oliolla on " + doggy.legs + " jalkaa.");
console.log(puppy.name + " oliolla on " + puppy.legs + " jalkaa.");

// näyttää onko ominaisuus OMA vai peritty prototyypiltä
console.log(
  doggy.name + " oliolla on legs ominaisuus: " + doggy.hasOwnProperty("legs"),
); // true  — doggy omistaa sen itse
console.log(
  puppy.name + " oliolla on legs ominaisuus: " + puppy.hasOwnProperty("legs"),
); // false — puppy lukee doggy:ltä
