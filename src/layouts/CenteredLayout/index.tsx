import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  signInGrid: {
    height: '100vh',
    backgroundImage: `linear-gradient(15deg, ${theme.palette.primary.main} 50%, #8c73ce 100%)`,
  },
}))

const CenteredLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.signInGrid} container direction="row" justify="center" alignItems="center">
      <Grid item>{children}</Grid>
    </Grid>
  )
}

export default CenteredLayout
