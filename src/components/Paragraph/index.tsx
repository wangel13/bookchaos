import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  paragraph: {
    fontWeight: 400,
    fontSize: `1.25rem`,
    lineHeight: `2.2rem`,
    letterSpacing: 0.15,
    marginBottom: `1.25rem`,
  },
}))

type Paragraph = {
  attributes?: JSX.ElementAttributesProperty
}

const Paragraph: React.FC<Paragraph> = ({ children, attributes }) => {
  const classes = useStyles()

  return (
    <Typography className={classes.paragraph} {...attributes}>
      {children}
    </Typography>
  )
}

export default Paragraph
