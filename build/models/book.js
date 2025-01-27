"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const process_1 = require("process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: process_1.env.DBHOST,
    username: process_1.env.DBUSERNAME,
    password: process_1.env.DBPASSWORD,
    port: parseInt(process_1.env.DBPORT),
    database: process_1.env.DBNAME
});
exports.Book = sequelize.define('Book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    author: {
        type: sequelize_1.DataTypes.STRING
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
/*
export const DB = [
  new Book(1, "El conde de Montecristo", "Alexandre Dumas", 5),
  new Book(2, "Ficciones", "Jorge Luis Borges", 5),
  new Book(3, "El hombre en busca de sentido", "Victor Frankl", 5),
  new Book(4, "El extranjero", "Albert Camus", 5),
]
  */
