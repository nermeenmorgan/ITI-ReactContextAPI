import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import SimpleBackdrop from './helpers/spinner';
import UsersModule, { MoviesContext } from './Modules/UsersModule';
import MovieListComponent from './components/movies';
import UpdatePage from './pages/update';
import { Suspense, lazy } from 'react';
import AddMoviePage from './pages/AddUser';
import DetailsPage from './pages/UserDetails';
import Brightness4Icon from '@mui/icons-material/Brightness4Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7Outlined';
import HomePage from './pages/Home';
import IconButton from '@mui/material/IconButton';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <BrowserRouter>
            <NavBar>
              <IconButton
                sx={{ ml: 1 }}
                onClick={toggleDarkMode}
                color="inherit"
              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </NavBar>

            <UsersModule>
              <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/movies/add" element={<AddMoviePage></AddMoviePage>} />
                <Route path="/update/:id" element={<UpdatePage></UpdatePage>} />
                <Route path="/movies" element={<HomePage></HomePage>} />
                <Route path="/movies/:id" element={<DetailsPage></DetailsPage>} />
                <Route path="/movies/:id" element={<DetailsPage></DetailsPage>} />
              </Routes>
            </UsersModule>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

