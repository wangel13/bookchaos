import { createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightBlue from '@material-ui/core/colors/lightBlue'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
      // @ts-ignore
      grey: '#edf0f2',
      lightGrey: '#f8f9fa',
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
