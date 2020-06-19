import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { makeStyles } from '@material-ui/core/styles'

import Link from 'components/Link'
import MiniLogo from 'components/Logo/MiniLogo'
import Extension from './Extensions'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(3.5),
    visibility: 'visible',
    transition: theme.transitions.create(['opacity', 'width', 'margin', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7.2),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7.2),
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: theme.customColors.lightGrey,
  },
  bgPaper: {
    backgroundColor: theme.palette.background.default,
  },
}))

type layoutExtensionConfig = {
  name: string
  apps: [
    {
      name: string
      icon: React.FC
      component: React.FC
    },
  ]
}

type DashboardLayout = {
  layoutExtensionComponent?: React.FC
  layoutExtensionConfig?: layoutExtensionConfig
  queryParams?: Record<string, unknown>
  bgPaper?: boolean
}

const DashboardLayout: React.FC<DashboardLayout> = ({
  children,
  layoutExtensionComponent: LayoutExtensionComponent = Extension,
  layoutExtensionConfig,
  queryParams,
  bgPaper = false,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, classes.drawerPaperClose),
        }}
      >
        <List component="nav">
          <ListItem title="My books" component={Link} button href="/dashboard">
            <ListItemIcon>
              <MiniLogo />
            </ListItemIcon>
          </ListItem>
          <ListItem title="Sign out" component={Link} button href="/signout">
            <ListItemIcon>
              <ExitToAppRoundedIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={clsx(classes.content, bgPaper && classes.bgPaper)}>{children}</main>
      {layoutExtensionConfig && <LayoutExtensionComponent queryParams={queryParams} config={layoutExtensionConfig} />}
    </div>
  )
}

export default DashboardLayout
