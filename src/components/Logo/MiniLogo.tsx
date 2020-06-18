import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  fullLogo: {
    height: '1em',
    width: '1em',
    color: 'transparent',
  },
}))

const MiniLogo = (props) => {
  const classes = useStyles()

  return (
    <SvgIcon className={classes.fullLogo} viewBox="0 0 196 106" {...props}>
      <path
        d="M75.5 30.5L53 8L8 53L30.5 75.5L53 98L143 8L165.5 30.5L188 53L143 98L120.5 75.5"
        stroke="rgba(0, 0, 0, 0.54)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default MiniLogo
