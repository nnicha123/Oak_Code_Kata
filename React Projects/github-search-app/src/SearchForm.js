import React, { useState } from 'react'
import axios from 'axios'
import Profile from './Profile'
import './SearchForm.css'

function SearchForm() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')
  const baseUrl = 'https://api.github.com/users/'

  const getUser = (username) => {
    // e.preventDefault()
    console.log(baseUrl + username)
    axios.get(baseUrl + username).then(res => {
      console.log(res)
      setUser(res.data)
    })
  }
  return (
    <div className="outerForm">
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <button className="searchButton" type="button" onClick={() => getUser(username)}>Find User</button>
      </form>
      <Profile user={user} username={username} />
    </div>
  )
}

export default SearchForm
