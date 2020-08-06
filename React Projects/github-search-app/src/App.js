import React, { Component } from 'react'
import SearchForm from './SearchForm'
import axios from 'axios'
import './App.css'
export class App extends Component {

  state = {
    data: {}
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/nnicha').then(res => {
      this.setState({ data: res.data })
    })
  }
  render() {

    return (
      <div className="outerWrap">
        <SearchForm />
      </div>
    )
  }
}

export default App
