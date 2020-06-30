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
import gql from 'graphql-tag'

import Transition from 'components/Transition'

const deleteBookMutation = gql`
  mutation deleteBook($id: String!) {
    deleteOneBook(where: { id: $id }) {
      id
      title
      published
    }
  }
`

type DeleteBook = {
  id: string
  handleClose: () => any
}

const DeleteBook: React.FC<DeleteBook> = ({ id, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false)

  function handleClickDialogOpen() {
    setOpen(true)
  }

  function handleDialogClose() {
    handleClose()
    setOpen(false)
  }

  const [deleteBook, { loading }] = useMutation(deleteBookMutation, {
    variables: { id },
    refetchQueries: ['myBooks'],
    onCompleted: ({ deleteOneBook: { title } }) => {
      handleDialogClose()
      enqueueSnackbar(`Success yor book - ${title} is deleted!`, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    },
    onError: (err) => {
      const errorMsgs = err.graphQLErrors.map(({ message }) => message)
      enqueueSnackbar(`Some errors, sir: ${errorMsgs.join(`,`)}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    },
  })

  return (
    <>
      <MenuItem onClick={handleClickDialogOpen}>Delete book</MenuItem>
      <Dialog open={open} TransitionComponent={Transition} disableBackdropClick onClose={handleDialogClose}>
        <DialogTitle>You sure, what you want delete your book?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your book will be deleted permanently. You don&apos;t be able to recover this.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleDialogClose} color="primary">
            Disagree
          </Button>
          <Button disabled={loading} onClick={() => deleteBook()} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteBook
