import HomePage from "./HomePage";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#000'
      },
      primary: {
        main: '#0DBF65'
      }
    },
    typography: {
      "fontFamily": `"PMingLiu", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     }
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
