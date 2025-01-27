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
            const books = yield book_1.Book.findAll();
            res.json(books);
        });
    }
    static GetBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = yield book_1.Book.findByPk(id);
            book ? res.json(book.toJSON) : res.status(404).json({ "error": "id does not match any book" });
        });
    }
    static CreateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const book = book_1.Book.build({
                title: body["title"],
                author: body["author"],
                rating: body["rating"]
            });
            yield book.save();
            res.status(201).json(book.toJSON);
        });
    }
    static UpdateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const body = req.body;
            const book = yield book_1.Book.findByPk(id);
            if (book == null) {
                res.status(404);
                return;
            }
            yield book.update({
                title: body["title"],
                author: body["author"],
                rating: body["rating"]
            });
            res.status(204).json(book);
        });
    }
    static DeleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = yield book_1.Book.findByPk(id);
            if (book == null) {
                res.status(404);
                return;
            }
            yield book.destroy();
            res.status(204);
        });
    }
}
exports.BookController = BookController;
