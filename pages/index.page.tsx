import React from "react";
import notistack from "notistack";

export default () => {
  const { useSnackbar } = require('notistack') as typeof notistack
  const { enqueueSnackbar } = useSnackbar()
  const alert = () => {
    enqueueSnackbar('fffffffff')
  }
  return (
    <div onClick={alert}>
      hello world
    </div>
  )
}
