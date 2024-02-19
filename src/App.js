import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import RickMortyDetail from "./pages/RickMortyDetail";
import MyFavorite from "./pages/MyFavorite";

function App() {
  const [theme, colorMode] = useMode();
  /*Color mode benim thema arka planını değiştirmemi tetikleyen fonksiyondur. Bunu useContext ile kulalnığım zaman artık her yerden buna 
  erişebilecek duruma geleceğim. Bunu içerimde olan Topbarda kullnıp topbardaki icına tıkayınca themanın değişmesini sağlayacağım.
  */
  //CssBaseline bileşeni, tarayıcıların varsayılan stillerini sıfırlar ve MUI'nin tema özelliklerini uygular.
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rickandmorty" element={<Home />} />
                <Route path="rickandmorty/:id" element={<RickMortyDetail />} />
                <Route path="rickandmorty/myfavorites" element={<MyFavorite />} />
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
