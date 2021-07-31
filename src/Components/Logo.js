import React, { PureComponent } from 'react'

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <center>
          <img src="http://localhost:5000/logo.gif" alt="logo"/>
        </center>
      </div>
    )
  }
}
