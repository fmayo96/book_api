import { Router, Request, Response } from "express"
import { BookController } from "../controllers/bookController"

export const booksRouter = Router()

booksRouter.get('/', BookController.GetBooks)
booksRouter.post('/', BookController.CreateBook)

booksRouter.get('/:id', BookController.GetBookById)
booksRouter.put('/:id', BookController.UpdateBook)
booksRouter.delete('/:id', BookController.DeleteBook)