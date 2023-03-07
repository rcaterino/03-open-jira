import { createTheme } from '@mui/material';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f2f2f2'
    },
    primary: {
      main: '#2b292d'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
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
         
          
        }
      }
    }
  }
});
