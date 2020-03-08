import React from 'react'
import notistack from 'notistack'
import { Button } from '@material-ui/core'

export default () => {
  const { useSnackbar } = require('notistack') as typeof notistack
  const { enqueueSnackbar } = useSnackbar()
  const alert = () => {
    enqueueSnackbar('fffffffff')
  }
  return <Button onClick={alert}>hello world</Button>
}
