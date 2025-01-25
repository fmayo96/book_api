export class Book {
  id!: number
  title!: string
  author!: string
  rating!: number

  constructor(id?: number, title?: string, author?: string, rating?: number) {
    if (id) this.id = id
    if (title) this.title = title
    if (author) this.author = author
    if (rating) this.rating = rating
  }

}

export const DB = [
  new Book(1, "El conde de Montecristo", "Alexandre Dumas", 5),
  new Book(2, "Ficciones", "Jorge Luis Borges", 5),
  new Book(3, "El hombre en busca de sentido", "Victor Frankl", 5),
  new Book(4, "El extranjero", "Albert Camus", 5),
]

