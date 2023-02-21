import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Routes';

export const ThemeContext = createContext(null)

function App() {

  const [theme , setTheme] = useState("Dark");

  const toggleTheme = () => {

    if(theme === "Dark")
    {
        setTheme("Light")
    }
    else 
    {
        setTheme("Dark")
    }
}

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <div className="App" id={theme}>
      <AppRouter />
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
