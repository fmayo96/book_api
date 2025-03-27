import express from 'express'
import cors from 'cors'
import { env } from 'process'
import { booksRouter } from './routes/books'
import { initDb } from './db'

initDb()

const app = express()
const port = env.PORT ?? 3000

app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use('/books', booksRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`))
