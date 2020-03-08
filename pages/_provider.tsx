import { ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { CssBaseline } from '@material-ui/core'
import React, { Fragment } from 'react'
import { theme as _theme } from './_theme'
import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme(_theme)

export const Provider: React.StatelessComponent = props => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>{props.children}</SnackbarProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default Provider
