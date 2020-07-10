import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import DeleteChapter from './DeleteChapter'
import PreviewChapter from './PreviewChapter'

type ContextMenu = {
  id: string
  bookId: string
}

const ContextMenu: React.FC<ContextMenu> = ({ id, bookId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <PreviewChapter id={id} />
        <DeleteChapter id={id} bookId={bookId} handleClose={handleClose} />
      </Menu>
    </>
  )
}

export default ContextMenu
