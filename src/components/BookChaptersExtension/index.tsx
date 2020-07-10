import React from 'react'
import { Box } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

import Card from './Card'
import { getBookChapters } from 'apollo/queries/book'
import ErrorAlert from 'components/ErrorAlert'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const useStyles = makeStyles((theme) => ({
  skeleton: {
    height: 64,
    borderRadius: 3,
    marginBottom: theme.spacing(2),
  },
}))

type BookChaptersExtension = {
  queryParams?: Record<string, unknown>
}

const BookChaptersExtension: React.FC<BookChaptersExtension> = ({ queryParams: { bookId, chapterId } }) => {
  const classes = useStyles()

  const { loading, error, data } = useQuery(getBookChapters, {
    variables: { id: bookId },
    fetchPolicy: 'cache-and-network',
  })

  if (error) return <ErrorAlert error={error} />

  return (
    <Box p={2}>
      {loading ? (
        <>
          <Skeleton variant="rect" className={classes.skeleton} />
          <Skeleton variant="rect" className={classes.skeleton} />
          <Skeleton variant="rect" className={classes.skeleton} />
        </>
      ) : (
        <motion.div variants={variants} initial="closed" animate="open">
          {data?.book?.chapters?.map((chapter) => (
            <Card key={chapter.id} bookChapters={data?.book?.chapters} chapter={chapter} currentChapterId={chapterId} />
          ))}
        </motion.div>
      )}
    </Box>
  )
}

export default BookChaptersExtension
