import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <img src={props.src} alt='profile_pic'/>
      <h1>{props.fullname}</h1>
      <h3>{props.profession}</h3>
      <p>{props.bio}</p>
      <button onClick={()=>props.handleName(props.fullname)}>Click here to alert</button>
    </div>
  )
}

export default Profile
