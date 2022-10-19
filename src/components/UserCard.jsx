import React from 'react'

export const Profile = ({username, phoneNo, address}) => {
    return(
        <>
        <p>{username}</p>
        <p>{phoneNo}</p>
        <p>{address}</p>
        </>
    )
}

const UserCard = (props) => {
    console.log (props)
  return (
    <>
    <h1>I am {props.firstName} {props.lastName}. I'm a {props.student} </h1>
    </>
  )
}


export default UserCard