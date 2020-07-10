import React, { useCallback, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import debounce from 'lodash/debounce'
import { makeStyles } from '@material-ui/styles'

import SaveIndicator from 'components/SaveIndicator'
import Element from './components/Element'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const useStyles = makeStyles(() => ({
  editor: {
    height: `100%`,
  },
}))

const debouncedSave = debounce((save, chapter, value) => {
  save({
    variables: {
      id: chapter.id,
      content: value,
    },
  })
}, 1000)

const SlateEditor = ({ chapter, save, saving, savingError }) => {
  const classes = useStyles()

  const renderElement = useCallback((props) => <Element {...props} />, [])
  const editor = useMemo(() => withReact(createEditor()), [])

  const [value, setValue] = useState(chapter?.content || initialValue)

  const handleChange = (newValue) => {
    debouncedSave(save, chapter, newValue)
    setValue(newValue)
  }

  return (
    <>
      <SaveIndicator saving={saving} savingError={savingError} />
      <Slate editor={editor} value={value} onChange={handleChange}>
        <Editable className={classes.editor} renderElement={renderElement} spellCheck autoFocus />
      </Slate>
    </>
  )
}

export default SlateEditor
