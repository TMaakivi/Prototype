// luodaan alkuperäinen animal-olio ja sen metodi
const animal = {
  animal_sound() {
    console.log(this.name + " pitää ääntä:");
  },
};

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

// muokataan alkuperäistä animal-oliota
animal.animal_sound2 = function () {
  console.log(this.name + ": Meow!");
};
// lisätään animal olioon legs ominaisuus
animal.legs = 4;

// doggy-oliolla on kaikki vanhat ja vain animal-olioon lisätyt ominaisuudet ja metodit
doggy.animal_sound();
doggy.doggy_sound();
doggy.animal_sound2();
console.log(doggy.legs);
// ears ominaisuutta ei ole määritelty -> undefined
console.log(doggy.ears);

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
console.log(puppy.legs);
