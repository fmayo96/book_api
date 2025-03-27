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
  const res = await client.query(
    `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${env.DBNAME}'`
  )

  if (res.rowCount === 0) {
    console.log(`${env.DBNAME} database not found, creating it.`)
    await client.query(`CREATE DATABASE "${env.DBNAME}";`)
    console.log(`created database ${env.DBNAME}`)
  } else {
    console.log(`${env.DBNAME} database exists.`)
  }
  await client.end()
}

export const initDb = async () => {
  await createDB()
  Book.sync().then(() => console.log('Books table created'))
}
