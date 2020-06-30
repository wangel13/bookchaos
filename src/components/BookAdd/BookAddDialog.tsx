import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { useSnackbar, withSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'

import FormikAdapter from '../FormikAdapter'
import gql from 'graphql-tag'

const AddBookSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
})

type FormComponent = {
  handleClose: () => any
  isSubmitting: boolean
  isValid: boolean
}

const FormComponent: React.FC<FormComponent> = ({ handleClose, isSubmitting, isValid }) => (
  <Form>
    <DialogTitle id="add-book-form-dialog-title">Write new book</DialogTitle>
    <DialogContent>
      <DialogContentText>To start writing a new book just type title below</DialogContentText>
      <Field
        name="title"
        InputComponent={TextField}
        label="Book title"
        autoFocus
        margin="dense"
        fullWidth
        disabled={isSubmitting}
        component={FormikAdapter}
      />
    </DialogContent>
    <DialogActions>
      <Button disabled={isSubmitting || !isValid} type="submit" color="primary">
        Create awesomeness
      </Button>
      <Button disabled={isSubmitting} type="button" onClick={handleClose} color="primary">
        Later
      </Button>
    </DialogActions>
  </Form>
)

const addBookMutation = gql`
  mutation addBook($title: String!) {
    createOneBook(title: $title) {
      id
      title
      published
    }
  }
`

type BookAddDialog = {
  handleClose: () => any
}

const BookAddDialog: React.FC<BookAddDialog> = ({ handleClose }) => {
  const { enqueueSnackbar } = useSnackbar()

  const [addBook, { data, error, loading }] = useMutation(addBookMutation, {
    refetchQueries: ['myBooks'],
    onCompleted: ({ createOneBook: { title } }) => {
      handleClose()
      enqueueSnackbar(`Success yor book - ${title} is ready!`, {
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
      // If you want to send error to external service?
      // console.log(`onError`, error)
    },
  })

  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={AddBookSchema}
      onSubmit={(values, { setSubmitting }) => {
        addBook({
          variables: {
            ...values,
          },
        }).then(() => {
          setSubmitting(false)
        })
      }}
    >
      {(props) => <FormComponent handleClose={handleClose} {...props} />}
    </Formik>
  )
}

export default BookAddDialog
