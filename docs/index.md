![Image of library](https://i.ibb.co/vvWKfDK/lab-07.png)

```
{
class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn =  isbn;
    }
  }

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
      }
    }
    deleteBook(isbn) {
    let indexOfBookToRemove = null;
    for(let index = 0; index < this._books.length; index++){
        let currentBook = this._books[index];
        if(currentBook.isbn == isbn) {
            indexOfBookToRemove = index;
            break;
        }
    }
    this._books.splice(indexOfBookToRemove, 1);
    }
  }

  const myBook = new Book("AP Calc Crash Course", "Banu et al", "01/01/2003", "1937828");
  
  
  // Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "1294932");

// Add book to library and output library count and books
library.addBook(atomicHabits);
console.log(`Book count: ${library.count}`);
library.listBooks();

console.log("Deleting Book");
library.deleteBook("1294932");
library.listBooks();

}
```
