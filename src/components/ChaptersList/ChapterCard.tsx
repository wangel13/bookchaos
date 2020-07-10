import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

import Link from '../Link'
import ContextMenu from './ContextMenu'
import { ChapterGetPayload } from '@prisma/client'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const useStyles = makeStyles((theme) => ({
  chapter: {
    marginBottom: theme.spacing(2),
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
  },
  title: {
    fontWeight: 500,
    paddingTop: theme.spacing(0.5),
  },
  subheader: {
    color: theme.palette.text.secondary,
  },
}))

type ChapterWithAuthors = ChapterGetPayload<{
  include: { authors: true; book: true }
}>

type ChapterCard = {
  chapter: ChapterWithAuthors
}

const ChapterCard: React.FC<ChapterCard> = ({ chapter: { title, id, book, authors, published } }) => {
  const classes = useStyles()

  return (
    <motion.div variants={variants}>
      <Paper elevation={1} className={classes.chapter}>
        <Box p={1}>
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item xs zeroMinWidth>
              <Typography title={title} className={classes.title} variant="body1" noWrap>
                <Link href="/book/chapter/[id]" as={`/book/chapter/${id}`}>
                  {' '}
                  {title}
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.subheader} title={title} noWrap>
                Creator: {authors[0]?.name}. Status: {published ? 'published' : 'not public'}.
              </Typography>
            </Grid>
            <Grid item>
              <ContextMenu id={id} bookId={book.id} />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </motion.div>
  )
}

export default ChapterCard
