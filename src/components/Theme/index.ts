import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightBlue from '@material-ui/core/colors/lightBlue'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customColors: {
      grey: React.CSSProperties['color']
      lightGrey: React.CSSProperties['color']
    }
  }
  interface ThemeOptions {
    customColors: {
      grey: React.CSSProperties['color']
      lightGrey: React.CSSProperties['color']
    }
  }
}
const theme = createMuiTheme({
  customColors: {
    grey: '#edf0f2',
    lightGrey: '#f8f9fa',
  },
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      light: deepPurple[300],
      main: '#654EA3',
      dark: deepPurple[700],
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.84)',
    },
  },
})

export default theme
