import React from 'react'
import { useSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import { ChapterGetPayload } from '@prisma/client'
import { updateOneChapter } from 'apollo/queries/chapter'

import SlateEditor from './SlateEditor'

type ChapterWithAuthors = ChapterGetPayload<{
  include: { authors: true; book: true }
}>

type ChapterEditor = {
  chapter: ChapterWithAuthors
}

const ChapterEditor: React.FC<ChapterEditor> = ({ chapter }) => {
  const { enqueueSnackbar } = useSnackbar()

  const onError = (error) => {
    const errorMsgs = error.graphQLErrors.map(({ message }) => message)
    enqueueSnackbar(`Some errors, sir: ${errorMsgs.join(`,`)}`, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    })
  }

  const [save, { loading, error }] = useMutation(updateOneChapter, {
    onError,
  })

  return <SlateEditor saving={loading} savingError={error} chapter={chapter} save={save} />
}

export default ChapterEditor
