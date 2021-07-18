import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { FC } from 'react';

/* ** WHERE TO PUT STYLE **
 *
 * * App/Themed.tsx:
 *     Nothing about spacing, except full width and height to override arbitrary defaults
 *     Mui Colors and other look&feel that doesn't mess with alignment, like margins
 * * App/index.css
 *     Only the "peripheral" layout, nothing within Content
 * * utils/useStyles.ts
 *     Functional classes, like tailwind but specific to this project
 *     (I guess tailwind would suffice)
 * * utils/tailwind.css
 *     Functional classes copied from TailwindCSS docs
 */

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#388fd6',
      main: '#136fba',
      dark: '#09497d',
    },
  },
  props: {
    MuiButton: { variant: 'contained' }, // Don't full-width
    MuiTextField: { fullWidth: true },
    MuiPaper: { style: { width: '100%' } },
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
