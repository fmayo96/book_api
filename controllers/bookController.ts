import { Request, Response } from 'express'
import { Book } from '../models/book'


export class BookController {
  static async GetBooks(req: Request, res: Response) {
    const books = await Book.findAll()
    res.json(books)
  }

  static async GetBookById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const book = await Book.findByPk(id)
    book ? res.json(book.toJSON) : res.status(404).json({ "error": "id does not match any book" })
  }

  static async CreateBook(req: Request, res: Response) {
    const body = req.body
    const book = Book.build({
      title: body["title"],
      author: body["author"],
      rating: body["rating"]
    })
    await book.save()
    res.status(201).json(book.toJSON)
  }

  static async UpdateBook(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const body = req.body
    const book = await Book.findByPk(id)
    if (book == null) {
      res.status(404)
      return
    }
    await book.update({
      title: body["title"],
      author: body["author"],
      rating: body["rating"]
    })
    res.status(204).json(book)
  }

  static async DeleteBook(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const book = await Book.findByPk(id)
    if (book == null) {
      res.status(404)
      return
    }
    await book.destroy()
    res.status(204)
  }
}