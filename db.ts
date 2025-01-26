import { Client } from 'pg'
import { env } from 'process'
import dotenv from 'dotenv'
dotenv.config()

export const connStringInit = `postgres://${env.USERNAME}:${env.PASSWORD}@${env.HOST}/postgres`
export const connString = `postgres://${env.USERNAME}:${env.PASSWORD}@${env.HOST}/${env.DBNAME}`

export const createDB = async () => {
  const client = new Client(connStringInit)
  client.connect()
  const res = await client.query("CREATE DATABASE IF NOT EXISTS $1;", [env.DBNAME])
  await client.end()
}
