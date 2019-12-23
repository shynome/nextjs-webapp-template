import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from "notistack";
import { theme } from './theme';

export const Provider: React.StatelessComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        {props.children}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Provider
