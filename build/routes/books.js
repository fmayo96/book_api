"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
exports.booksRouter = (0, express_1.Router)();
exports.booksRouter.get('/', bookController_1.BookController.GetBooks);
exports.booksRouter.post('/', bookController_1.BookController.CreateBook);
exports.booksRouter.get('/:id', bookController_1.BookController.GetBookById);
exports.booksRouter.put('/:id', bookController_1.BookController.UpdateBook);
exports.booksRouter.delete('/:id', bookController_1.BookController.DeleteBook);