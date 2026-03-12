// C# kielessä luokat periytyvät ylemmän tason luokista

// Alkuperäinen Animal luokka
class Animal
{
    // Animal luokan oma äänimetodi
    public void AnimalSound()
    {
        Console.WriteLine("Eläin pitää ääntä:");
    }
}

// Doggy luokka periytyy Animal luokasta
class Doggy : Animal
{
    // Luokan sisällä lisätään metodi omalle Doggy äänelle
    public void DogSound()
    {
        Console.WriteLine("Hau!");
    }
}

class Program
{
    static void Main()
    {
        Doggy doggy = new Doggy();
        // Doggy luokka sisältää nyt sekä oman että perityn metodin
        doggy.AnimalSound(); // Animal luokasta peritty metodi
        doggy.DogSound();   // Doggy luokan oma metodi
    }
}