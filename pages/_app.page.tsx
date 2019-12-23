import React, { Fragment } from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import notistack from "notistack";
import { CssBaseline, NoSsr } from '@material-ui/core';
import { theme } from './theme';

export const Provider: React.StatelessComponent = (props) => {
  const { SnackbarProvider } = require('notistack') as typeof notistack
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        {props.children}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <NoSsr>
          <Provider>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Component {...pageProps} />
          </Provider>
        </NoSsr>
      </Fragment>
    )
  }
}

export default MyApp;
