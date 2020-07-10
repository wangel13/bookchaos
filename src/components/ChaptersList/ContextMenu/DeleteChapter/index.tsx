import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { useSnackbar } from 'notistack'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useMutation } from '@apollo/react-hooks'

import Transition from 'components/Transition'
import { getBook } from 'apollo/queries/book'
import { deleteOneChapter } from 'apollo/queries/chapter'

type DeleteChapter = {
  id: string
  bookId: string
  handleClose: () => any
}

const DeleteChapter: React.FC<DeleteChapter> = ({ id, bookId, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false)

  const handleClickDialogOpen = () => {
    setOpen(true)
  }

  const handleDialogClose = () => {
    handleClose()
    setOpen(false)
  }

  const [deleteChapter, { loading }] = useMutation(deleteOneChapter, {
    onError: (error) => {
      const errorMsgs = error.graphQLErrors.map(({ message }) => message)
      enqueueSnackbar(`Some errors, sir: ${errorMsgs.join(`,`)}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    },
    onCompleted: ({ deleteOneChapter: { title } }) => {
      handleDialogClose()
      enqueueSnackbar(`Success yor chapter - ${title} is deleted!`, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    },
    refetchQueries: [{ query: getBook, variables: { id: bookId } }],
    variables: { id },
  })

  return (
    <>
      <MenuItem onClick={handleClickDialogOpen}>Delete chapter</MenuItem>
      <Dialog open={open} TransitionComponent={Transition} disableBackdropClick onClose={handleDialogClose}>
        <DialogTitle>You sure, what you want delete your chapter?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your chapter will be deleted permanently. You don&apos;t be able to recover this.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleDialogClose} color="primary">
            Disagree
          </Button>
          <Button disabled={loading} onClick={() => deleteChapter()} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteChapter
