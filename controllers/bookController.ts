import { Request, Response } from 'express'
import { DB, Book } from '../models/book'

export class BookController {
  static async GetBooks(req: Request, res: Response) {
    res.json(DB)
  }

  static async GetBookById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const book = DB.find(b => b.id === id)
    book ? res.json(book) : res.status(404).json({ "error": "id does not match any book" })
  }

  static async CreateBook(req: Request, res: Response) {
    const body = req.body
    let book = new Book()
    book.id = DB.length + 1
    book.title = body["title"]
    book.author = body["author"]
    book.rating = body["rating"]
    DB.push(book)
    res.status(201).json(book)
  }

  static async UpdateBook(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const body = req.body
    const idx = DB.findIndex(b => b.id === id)
    DB[idx].title = body["title"]
    DB[idx].author = body["author"]
    DB[idx].rating = body["rating"]
    res.status(204).json(DB[idx])
  }

  static async DeleteBook(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const idx = DB.findIndex(b => b.id === id)
    delete DB[idx]
    res.status(204).json(DB[idx])
  }
}