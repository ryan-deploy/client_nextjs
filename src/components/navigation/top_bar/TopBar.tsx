import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export interface ITopBar extends React.ComponentPropsWithoutRef<'header'> {}

const TopBar: React.FC<ITopBar> = ({ ...headerProps }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFF',
        contrastText: blue[700],
      },
    },
  });
  return (
    <header {...headerProps}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>LOGO</Toolbar>
        </AppBar>
      </ThemeProvider>
    </header>
  );
};

export default TopBar;
