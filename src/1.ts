/* Створіть інтерфейс Product, який має наступні властивості та методи:
id (число)
name (рядок)
price (число)
description (рядок)
getShortDescription(): string - метод, який повертає короткий опис продукту. (20 символів з властивості description + '...')
Створіть клас Product, який реалізує інтерфейс Product. Клас повинен мати конструктор для ініціалізації властивостей id, name, price, та description.
У класі Product реалізуйте метод getShortDescription
Створіть екземпляр класу Product за допомогою конструктора і виведіть в консоль його властивості та результати виклику методів. */

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  getShortDescription(): string;
}

class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string
  ) {}
  getShortDescription(): string {
    return this.description.slice(0, 20) + "...";
  }
}

const iPhone = new Product(
  1145,
  "iPhone 16 ",
  47499,
  "Кожне нове покоління оригінальних смартфонів від творців з Купертіно по-своєму дивує і відкриває перед користувачами низку нових можливостей для творчості, роботи та відпочинку. Яскравіший дисплей, приріст оперативної памʼяті та збільшення базового вбудованого сховища — ми отримали багато цікавого та несподіваного з виходом новинки Епл 2024 року. То ж пропонуємо ближче познайомитись новинкою, та розглянути ключові зміни в дизайні та характеристиках."
);

console.log(iPhone.name, iPhone.getShortDescription());
