import React from 'react'
import "../UserProfile.css"

const Profile = ({user}) => {
  return (
    <div className='user-profile'>
        <img className="profile-picture" src={user.avatar} alt={`${user.name}'s Avatar`} height={300} width={300}/>
        <h2> {user.firstName} {user.lastName} </h2>
        <p>{user.phoneNumber}</p>
        <ul>
            <li><b> Email: </b>{user.emailAddress}</li>
            <li><b> Location:</b> {user.location}</li>
            <li><b>Tech Stack: </b> {user.stack}</li>
        </ul>

    </div>
  )
}

export default Profile