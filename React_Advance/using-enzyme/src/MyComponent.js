import React, { Component } from 'react'

export class MyComponent extends Component {
  state = {
    isShown: true
  }
  toggleIsShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }))
  render() {
    const { isShown } = this.state
    return (
      <div>
        <button onClick={this.toggleIsShown}>Toggle</button>
        {isShown && <div>Text goes here</div>}
      </div>
    )
  }
}

export default MyComponent
