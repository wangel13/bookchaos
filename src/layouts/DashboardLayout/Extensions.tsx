import React, { useState, useReducer } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    overflowX: 'hidden',
    position: 'relative',
    width: `calc(300px + ${theme.spacing(7.2)}px)`,
  },
  drawerPaperClose: {
    width: theme.spacing(7.2),
  },
  iconButton: {
    margin: theme.spacing(0.5),
  },
  main: {
    height: `100%`,
  },
  extensionContainer: {
    maxWidth: 300,
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: theme.customColors.grey,
  },
}))

function init() {
  return { extension: '' }
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeExtension':
      return { extension: action.payload }
    default:
      throw new Error()
  }
}

const Extensions = ({ config: { apps }, queryParams }) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, apps, init)

  function changeExtension(payload) {
    if (state.extension !== payload) {
      dispatch({
        type: 'changeExtension',
        payload,
      })
      setDrawerOpen(true)
    } else {
      setDrawerOpen(!drawerOpen)
    }
  }

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{
        paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
      }}
    >
      <Grid className={classes.main} container direction="row" justify="flex-start" alignItems="stretch" wrap="nowrap">
        <Grid item>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            {apps.map(({ name, icon: Icon, title }) => (
              <Grid key={name} item>
                <IconButton
                  title={title}
                  onClick={() => changeExtension(name)}
                  className={classes.iconButton}
                  aria-label={name}
                >
                  <Icon />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {drawerOpen && (
          <Grid item xs className={classes.extensionContainer}>
            {apps.map(
              ({ name, component: Component }) =>
                name === state.extension && <Component queryParams={queryParams} key={name} />,
            )}
          </Grid>
        )}
      </Grid>
    </Drawer>
  )
}

export default Extensions
