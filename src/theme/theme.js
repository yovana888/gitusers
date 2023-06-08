import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#d177ea',
      contrastText: "#ffffff",
    },
    secondary: {
      main:'#4e42d4',
      contrastText: "#ffffff"
    },
  },
});

export const themeDark = createTheme({
  root: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#fff"
   },
    palette: {
        background: {
          default: "#222222"
        },
        text: {
          primary: "#ffffff"
        }
      }
   });



