import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

function Success() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success" />
        <div>
          <h1>Thankyou for your Submission</h1>
        </div>
      </React.Fragment>
    </MuiThemeProvider>

  )
}

export default Success
