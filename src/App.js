import HomePage from "./views/HomePage";
import "./styles/App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <HomePage />
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
