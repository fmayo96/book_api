import { Sequelize, DataTypes } from "sequelize"
import { env } from "process"
import { connString } from "../db"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(connString)

export const Book = sequelize.define(
  'Book',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    }
  }
)

/*
export const DB = [
  new Book(1, "El conde de Montecristo", "Alexandre Dumas", 5),
  new Book(2, "Ficciones", "Jorge Luis Borges", 5),
  new Book(3, "El hombre en busca de sentido", "Victor Frankl", 5),
  new Book(4, "El extranjero", "Albert Camus", 5),
]
  */

