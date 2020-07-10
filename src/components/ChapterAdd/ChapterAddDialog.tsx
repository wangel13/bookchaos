import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { useSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import { getBook } from 'apollo/queries/book'

import FormikAdapter from 'components/FormikAdapter'
import { createOneChapter } from 'apollo/queries/chapter'

const AddChapterSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
})

type FormComponent = {
  handleClose: () => any
  isSubmitting: boolean
  isValid: boolean
}

const FormComponent: React.FC<FormComponent> = ({ handleClose, isSubmitting, isValid }) => (
  <Form>
    <DialogTitle id="add-chapter-form-dialog-title">Add new chapter</DialogTitle>
    <DialogContent>
      <DialogContentText>To start writing a new chapter just type title below</DialogContentText>
      <Field
        name="title"
        InputComponent={TextField}
        label="Chapter title"
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

type ChapterAddDialog = {
  handleClose: () => any
  bookId: string | string[]
}

const ChapterAddDialog: React.FC<ChapterAddDialog> = ({ handleClose, bookId }) => {
  const { enqueueSnackbar } = useSnackbar()

  const [addChapter, { loading, data, error }] = useMutation(createOneChapter, {
    refetchQueries: [{ query: getBook, variables: { id: bookId } }],
    onCompleted: ({ createOneChapter: { title } }) => {
      handleClose()
      enqueueSnackbar(`Success yor chapter - ${title} is ready!`, {
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
    <Formik
      initialValues={{ title: '' }}
      validationSchema={AddChapterSchema}
      onSubmit={(values, { setSubmitting }) => {
        addChapter({
          variables: {
            ...values,
            bookId,
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

export default ChapterAddDialog
