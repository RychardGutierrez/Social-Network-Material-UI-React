import { useEffect, useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { TYPE_THEME_LOOKUP } from './shared';
import { darkTheme, defaultTheme } from './theme';

const App = () => {
  const [mode, setMode] = useState(TYPE_THEME_LOOKUP.light);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    mode === TYPE_THEME_LOOKUP.dark
      ? setTheme(darkTheme)
      : setTheme(defaultTheme);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
