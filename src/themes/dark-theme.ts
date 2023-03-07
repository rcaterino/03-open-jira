import { createTheme } from '@mui/material';


export const darkTheme = createTheme({
  palette:{
    mode: 'dark',
    background:{
      default: '#2b292d'
    },
    primary:{
      main:'#30f2cf'
    },
    secondary:{
      main:'#33918c'
    },
    error:{
      main: '#af083f'
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#30f2cf'
        }
      }
    }
  }
});