import "./styles/App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from "./views/LandingPage";

function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#0DBF65'
      },
      primary: {
        main: '#000'
      }
    },
    // typography: {
    //   "fontFamily": `"roboto", "PMingLiu", sans-serif`,
    //   "fontSize": 14,
    //   "fontWeightLight": 300,
    //   "fontWeightRegular": 400,
    //   "fontWeightMedium": 500
    //  }
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <LandingPage/>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
