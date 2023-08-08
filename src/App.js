import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import { darktheme,lightheme } from './styles/theme';
// import { GlobalStyle } from './styles/Global.styles';
import { useEffect, useState } from 'react';

function App() {
const [myTheme, setMyTheme] = useState(
  sessionStorage.getItem("theme") || "light"
)
const [themes, setThemes] = useState(lightheme)


useEffect(() => {
  sessionStorage.setItem("theme", myTheme);
  setThemes(myTheme === "light" ? lightheme : darktheme);
}, [myTheme])


  return (
    <div className="App">
      <ThemeProvider  theme={themes}> 
      {/* <GlobalStyle/> */}
      <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
