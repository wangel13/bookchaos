import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import Skeleton from '@material-ui/lab/Skeleton'

import BookCard from './BookCard'
import BookAdd from 'components/BookAdd'
import { BookGetPayload } from '@prisma/client'

const useStyles = makeStyles(() => ({
  skeleton: {
    height: 212,
    width: 300,
    borderRadius: 3,
  },
}))

type BookWithAuthors = BookGetPayload<{
  include: { authors: true }
}>

type BookList = {
  books: [BookWithAuthors]
  loading: boolean
}

const BooksList: React.FC<BookList> = ({ books, loading }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      {loading ? (
        <>
          {Array.from(new Array(6)).map((item, index) => (
            <Grid item key={index}>
              <Skeleton variant="rect" className={classes.skeleton} />
            </Grid>
          ))}
        </>
      ) : (
        <>
          <Grid item>
            <BookAdd />
          </Grid>
          {books.map((book) => (
            <Grid key={book.id} item>
              <BookCard book={book} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  )
}

export default BooksList
