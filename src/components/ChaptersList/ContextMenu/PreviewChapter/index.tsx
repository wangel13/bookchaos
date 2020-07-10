import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'

type PreviewChapter = {
  id: string
}

const PreviewChapter: React.FC<PreviewChapter> = ({ id }) => {
  const handleClickPreview = () => {
    window.open(`/read/chapter/${id}`, '_blank')
  }

  return <MenuItem onClick={handleClickPreview}>Preview as reader</MenuItem>
}

export default PreviewChapter
