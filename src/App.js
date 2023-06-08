import Router from './router'
import { ThemeProvider } from "@mui/material";
import {theme, themeDark} from './theme/theme';
import CssBaseline from "@mui/material/CssBaseline";
const App =()=>{
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
         <Router/>
    </ThemeProvider>
  )
}

export default App;