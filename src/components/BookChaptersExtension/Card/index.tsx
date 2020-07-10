import React from 'react'
import find from 'lodash/find'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { motion } from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import ArrowBothSidesIcon from '@material-ui/icons/CompareArrowsRounded'
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import { ChapterGetPayload } from '@prisma/client'

import Link from 'components/Link'
import ChapterLinkDialog from 'components/LinkChapter'
import { Chapter } from '@prisma/client'

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
      boxShadow: theme.shadows[1],
    },
  },
  title: {
    paddingTop: theme.spacing(0.5),
    fontWeight: 500,
  },
  subheader: {
    color: theme.palette.text.secondary,
  },
}))

type ChapterWithLinksAndBook = ChapterGetPayload<{
  include: { book: true; fromChapters: true; toChapters: true }
}>

type Card = {
  chapter: ChapterWithLinksAndBook
  bookChapters: ChapterWithLinksAndBook[]
  currentChapterId: any
}

const Card: React.FC<Card> = ({
  chapter: {
    title,
    id,
    fromChapters,
    toChapters,
    book: { id: bookId },
    published,
  },
  bookChapters,
  currentChapterId,
}) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const isCurrentChapter = id === currentChapterId
  const linkedTo = Boolean(find(fromChapters, { toId: currentChapterId }))
  const linkedFrom = Boolean(find(toChapters, { fromId: currentChapterId }))

  const publishedStatus = published ? 'published' : 'not public'

  return (
    <motion.div variants={variants}>
      <Paper elevation={0} className={classes.chapter}>
        <Box p={1}>
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              {linkedFrom && !linkedTo && !isCurrentChapter && (
                <Tooltip placement="left" title="Linked from current chapter">
                  <IconButton color="primary" onClick={handleClickOpen}>
                    <ArrowForwardRoundedIcon />
                  </IconButton>
                </Tooltip>
              )}
              {linkedTo && !linkedFrom && !isCurrentChapter && (
                <Tooltip placement="left" title="Linked to current chapter">
                  <IconButton color="secondary" onClick={handleClickOpen}>
                    <ArrowBackRoundedIcon />
                  </IconButton>
                </Tooltip>
              )}
              {linkedTo && linkedFrom && !isCurrentChapter && (
                <Tooltip placement="left" title="Linked to/from current chapter">
                  <IconButton color="secondary" onClick={handleClickOpen}>
                    <ArrowBothSidesIcon />
                  </IconButton>
                </Tooltip>
              )}
              {!linkedFrom && !linkedTo && !isCurrentChapter && (
                <Tooltip placement="left" title="Not linked">
                  <IconButton onClick={handleClickOpen}>
                    <RemoveRoundedIcon />
                  </IconButton>
                </Tooltip>
              )}
              {isCurrentChapter && (
                <Tooltip placement="left" title="Current chapter">
                  <IconButton color="primary" onClick={handleClickOpen}>
                    <BookmarkRoundedIcon />
                  </IconButton>
                </Tooltip>
              )}
              <ChapterLinkDialog
                chapterId={id}
                chapterTitle={title}
                bookId={bookId}
                bookChapters={bookChapters}
                handleClose={handleClose}
                open={open}
              />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography title={title} className={classes.title} variant="body1" noWrap>
                <Link href="/book/chapter/[id]" as={`/book/chapter/${id}`}>
                  {' '}
                  {title}
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.subheader} title={publishedStatus} noWrap>
                Status: {publishedStatus}.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </motion.div>
  )
}

export default Card
