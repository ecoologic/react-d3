import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { FC } from 'react';

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  props: {
    MuiButton: { variant: 'contained' },
  },
  typography: {
    button: { textTransform: 'none' },
  },
});

const Themed: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Themed;
