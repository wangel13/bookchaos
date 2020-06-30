import React from 'react'
import Card from '@material-ui/core/Card'
import LibraryAdd from '@material-ui/icons/LibraryAdd'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'

import BookAddDialog from './BookAddDialog'
import Transition from 'components/Transition'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    minHeight: 212,
    height: `100%`,
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

const BookAdd: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Card className={classes.card}>
        <Button color="primary" onClick={handleClickOpen} className={classes.actionArea}>
          <LibraryAdd className={classes.addIcon} /> New book
        </Button>
      </Card>
      <Dialog
        disableBackdropClick
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <BookAddDialog handleClose={handleClose} />
      </Dialog>
    </>
  )
}

export default BookAdd
