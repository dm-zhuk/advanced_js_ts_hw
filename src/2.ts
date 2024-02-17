// 1. Створи клас Electronics який походить від Product та опиши його інтерфейс, додавши властивість brand (рядок) та метод powerOn() який виводить повідомлення про включення електрічного пристрою Apple HomePod

// Інтерфейс, що описує властивості класу Electronics
interface IElectronics {
  brand: string;
  powerOn(): void;
}

class Product2 {
  constructor(public name: string, public price: number) {}
}
// Клас Electronics, який успадковується від класу Product та реалізує інтерфейс IElectronics
class Electronics extends Product2 implements IElectronics {
  constructor(name: string, price: number, public brand: string) {
    super(name, price);
  }
  // Реалізація методу powerOn
  powerOn() {
    console.log("Turning on Apple HomePod");
  }
}
// Створення об'єкту класу Electronics
const homePod = new Electronics("Apple HomePod", 350, "Apple");
// Виклик методу powerOn
homePod.powerOn();

// 2. Створи клас Clothing  який походить від Product та опиши його інтерфейс, додавши властивість size (рядок) та метод wear() який виводить повідомлення про надягання одягу.

interface IClothing {
  size: string;
  wear(): void;
}
// Клас Clothing, який успадковується від класу Product та реалізує інтерфейс IClothing
class Clothing extends Product2 implements IClothing {
  constructor(name: string, price: number, public size: string) {
    super(name, price);
  }
  // Реалізація методу wear
  wear() {
    console.log("Now is wearing on" + " " + this.name + " " + this.size);
  }
}
// Створення об'єкту класу Clothing
const tShirt = new Clothing("t-shirt", 25, "M");
// Виклик методу wear
tShirt.wear();