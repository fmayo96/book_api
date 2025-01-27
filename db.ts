import { Client } from 'pg'
import { env } from 'process'
import { Book } from './models/book'
import dotenv from 'dotenv'
dotenv.config()

const createDB = async () => {
  const client = new Client({
    host: env.DBHOST,
    user: env.DBUSERNAME,
    password: env.DBPASSWORD,
    port: parseInt(env.DBPORT!)
  })
  await client.connect()
  await client.query(`CREATE DATABASE BooksDB;`)
  await client.end()
}

const init = async () => {
  await createDB()
  Book.sync().then(() => console.log('Books table created'))
}

init()
