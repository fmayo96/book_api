"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.Book = void 0;
class Book {
    constructor(id, title, author, rating) {
        if (id)
            this.id = id;
        if (title)
            this.title = title;
        if (author)
            this.author = author;
        if (rating)
            this.rating = rating;
    }
}
exports.Book = Book;
exports.DB = [
    new Book(1, "El conde de Montecristo", "Alexandre Dumas", 5),
    new Book(2, "Ficciones", "Jorge Luis Borges", 5),
    new Book(3, "El hombre en busca de sentido", "Victor Frankl", 5),
    new Book(4, "El extranjero", "Albert Camus", 5),
];
