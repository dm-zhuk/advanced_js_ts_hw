/* Створи клас Library та опиши його інтерфейс
books (масив) масив книг в бібілотеці
метод add() буде додавати книгу в масив (екземпляр класу Book)
метод borrowBook() для оренди книги який приймає назву книги
метод getBorrowedBooks повертає масив всіх орендованих книг
метод getAvailableBooks повертає масив всіх доступних книг */
interface ILibrary {
  books: Book[];
  add(book: Book): void;
  borrowBook(bookName: string): void;
  getBorrowedBooks(): Book[];
  getAvailableBooks(): Book[];
}

class Library implements ILibrary {
  books: Book[] = [];
  add(book: Book): void {
    this.books.push(book);
  }
  borrowBook(bookName: string): void {
    const book = this.books.find((book) => book.name == bookName);
    if (book) {
      book.isBorrowed = true;
    }
  }
  getBorrowedBooks(): Book[] {
    return this.books.filter((book) => book.isBorrowed);
  }
  getAvailableBooks(): Book[] {
    return this.books.filter((book) => !book.isBorrowed);
  }
}

class Book {
  isBorrowed: boolean;
  constructor(public name: string) {}
}

const library = new Library();
library.add(new Book("Harry Potter"));
library.add(new Book("Lord of the Rings"));
library.add(new Book("The Hobbit"));
library.add(new Book("The Alchemist"));
library.borrowBook("The Hobbit");
library.borrowBook("Lord of the Rings");
console.dir(library.getAvailableBooks());
console.dir(library.getBorrowedBooks());