import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./cmps/header";
import { routes } from "./routes";
import { toggleDarkMode } from "./store/system/ststem.action";

export const App = () => {
  const dispatch = useDispatch()

  const theme = createTheme({
    palette: {
      white: {
        main: '#FFFF'
      },
    }


  })

  return (
    <section className="App">
      <ThemeProvider theme={theme}>
        <Button onClick={() => dispatch(toggleDarkMode())} className="dark-btn">Dark Mode</Button>

        <Header />
        <main>
          <Routes>
            {routes.map(route =>
              <Route key={route.path} element={route.element} path={route.path}>
              </Route>)}
          </Routes>
        </main>
      </ThemeProvider>
    </section>
  );
}


