import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as Yup from 'yup'
import { Field, Form, Formik, FormikProps } from 'formik'
import { useSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'

import Transition from 'components/Transition'
import FormikAdapter from 'components/FormikAdapter'
import { getBookChapters } from 'apollo/queries/book'
import ComboBox from 'components/ComboBox'
import { createOneChapterLink } from 'apollo/queries/chapterLink'
import { AutocompleteRenderInputParams } from '@material-ui/lab'
import { ChapterGetPayload } from '@prisma/client'

type ChapterWithLinksAndBook = ChapterGetPayload<{
  include: { book: true; fromChapters: true; toChapters: true }
}>

const AddChapterLinkSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  fromId: Yup.string().required('Required'),
  toId: Yup.string().required('Required'),
})

type FormValues = {
  title: string
  toId: any
  fromId: any
}

type FormComponent = FormikProps<FormValues> & {
  handleClose: () => any
  isSubmitting: boolean
  isValid: boolean
  bookChapters: ChapterWithLinksAndBook[]
}

const FormComponent: React.FC<FormComponent> = ({
  handleClose,
  isSubmitting,
  isValid,
  touched,
  errors,
  bookChapters,
}) => {
  return (
    <Form>
      <DialogTitle id="add-chapter-link-form-dialog-title">Link chapter</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose chapters and type title for link to connect one with another</DialogContentText>
        <Field
          name="fromId"
          options={bookChapters}
          getOptionLabel={(option) => option.title}
          component={ComboBox}
          getOptionSelected={(option, value) => option?.id === value?.id}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField
              {...params}
              error={touched['fromId'] && !!errors['fromId']}
              helperText={touched['fromId'] && errors['fromId']}
              label="From chapter"
              margin="dense"
              fullWidth
            />
          )}
        />
        <Field
          name="toId"
          options={bookChapters}
          getOptionLabel={(option) => option.title}
          component={ComboBox}
          getOptionSelected={(option, value) => option?.id === value?.id}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField
              {...params}
              error={touched['toId'] && !!errors['toId']}
              helperText={touched['toId'] && errors['toId']}
              label="To chapter"
              margin="dense"
              fullWidth
            />
          )}
        />
        <Field
          name="title"
          InputComponent={TextField}
          label="Title for link"
          margin="dense"
          fullWidth
          helperText="Required"
          component={FormikAdapter}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={isSubmitting || !isValid} type="submit" color="primary">
          Connect
        </Button>
        <Button disabled={isSubmitting} type="button" onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Form>
  )
}

type ChapterLinkDialog = {
  handleClose: () => any
  open: boolean
  chapterId: string
  chapterTitle: string
  bookId: string
  bookChapters: ChapterWithLinksAndBook[]
}

const ChapterLinkDialog: React.FC<ChapterLinkDialog> = ({
  handleClose,
  open,
  chapterId,
  chapterTitle,
  bookId,
  bookChapters,
}) => {
  const { enqueueSnackbar } = useSnackbar()
  const [addChapterLink] = useMutation(createOneChapterLink, {
    refetchQueries: [{ query: getBookChapters, variables: { id: bookId } }],
    onCompleted: ({ createOneChapterLink: { title } }) => {
      handleClose()
      enqueueSnackbar(`Success yor chapter link - ${title} is ready!`, {
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
    <Dialog
      disableBackdropClick
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Formik
        initialValues={{
          title: '',
          fromId: { id: chapterId, title: chapterTitle },
          toId: null,
        }}
        validationSchema={AddChapterLinkSchema}
        onSubmit={(values, { setSubmitting }) => {
          addChapterLink({
            variables: {
              data: {
                title: values.title,
                fromChapter: { connect: { id: values.fromId.id } },
                toChapter: { connect: { id: values.toId.id } },
              },
            },
          }).then(() => {
            setSubmitting(false)
          })
        }}
      >
        {(props) => <FormComponent bookChapters={bookChapters} handleClose={handleClose} {...props} />}
      </Formik>
    </Dialog>
  )
}

export default ChapterLinkDialog
