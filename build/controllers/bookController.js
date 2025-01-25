"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_1 = require("../models/book");
class BookController {
    static GetBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(book_1.DB);
        });
    }
    static GetBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = book_1.DB.find(b => b.id === id);
            book ? res.json(book) : res.status(404).json({ "error": "id does not match any book" });
        });
    }
    static CreateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            let book = new book_1.Book();
            book.id = book_1.DB.length + 1;
            book.title = body["title"];
            book.author = body["author"];
            book.rating = body["rating"];
            book_1.DB.push(book);
            res.status(201).json(book);
        });
    }
    static UpdateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const body = req.body;
            const idx = book_1.DB.findIndex(b => b.id === id);
            book_1.DB[idx].title = body["title"];
            book_1.DB[idx].author = body["author"];
            book_1.DB[idx].rating = body["rating"];
            res.status(204).json(book_1.DB[idx]);
        });
    }
    static DeleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const idx = book_1.DB.findIndex(b => b.id === id);
            delete book_1.DB[idx];
            res.status(204).json(book_1.DB[idx]);
        });
    }
}
exports.BookController = BookController;
