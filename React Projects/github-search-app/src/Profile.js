import React, { useEffect, useState } from 'react'
import './Profile.css'

function Profile(props) {

  const checkValidUser = (props) => {
    if (props.user.login) {
      return (
        <div className="profileCard">
          <div className="cardTop">
            <img src={props.user.avatar_url} />
            <div className="username">Username : {props.user.login}</div>
            <div><b>User Id :</b> {props.user.id}</div>
            <div>Repos : {props.user.public_repos}</div>
            <div>Followers : {props.user.followers}</div>
            <div>Following : {props.user.following}</div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="noUserFound">No user found</div>
      )
    }
  }
  return (
    checkValidUser(props)
  )
}






export default Profile
