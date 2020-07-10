import React from 'react'
import AddRounded from '@material-ui/icons/AddRounded'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import { motion } from 'framer-motion'
import Paper from '@material-ui/core/Paper'

import ChapterAddDialog from './ChapterAddDialog'
import Transition from '../Transition'

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
  addChapter: {
    marginBottom: theme.spacing(2),
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
  },
  actionArea: {
    width: '100%',
    height: '100%',
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  media: {
    objectFit: 'cover',
  },
}))

type ChapterAdd = {
  bookId: string | string[]
}

const ChapterAdd: React.FC<ChapterAdd> = ({ bookId }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <motion.div variants={variants}>
        <Paper elevation={1} className={classes.addChapter}>
          <Button color="primary" onClick={handleClickOpen} className={classes.actionArea}>
            <AddRounded className={classes.addIcon} />
            New chapter
          </Button>
        </Paper>
      </motion.div>

      <Dialog
        disableBackdropClick
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ChapterAddDialog bookId={bookId} handleClose={handleClose} />
      </Dialog>
    </>
  )
}

export default ChapterAdd
