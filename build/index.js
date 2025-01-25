"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const process_1 = require("process");
const books_1 = require("./routes/books");
const app = (0, express_1.default)();
const port = (_a = process_1.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.disable('x-powered-by');
app.use('/movies', books_1.booksRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));
