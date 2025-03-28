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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = void 0;
const pg_1 = require("pg");
const process_1 = require("process");
const book_1 = require("./models/book");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({
        host: process_1.env.DBHOST,
        user: process_1.env.DBUSERNAME,
        password: process_1.env.DBPASSWORD,
        port: parseInt(process_1.env.DBPORT)
    });
    yield client.connect();
    const res = yield client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${process_1.env.DBNAME}'`);
    if (res.rowCount === 0) {
        console.log(`${process_1.env.DBNAME} database not found, creating it.`);
        yield client.query(`CREATE DATABASE "${process_1.env.DBNAME}";`);
        console.log(`created database ${process_1.env.DBNAME}`);
    }
    else {
        console.log(`${process_1.env.DBNAME} database exists.`);
    }
    yield client.end();
});
const initDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield createDB();
    book_1.Book.sync().then(() => console.log('Books table created'));
});
exports.initDb = initDb;
