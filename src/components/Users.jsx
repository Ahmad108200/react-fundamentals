import React,{useState, useEffect} from 'react'

const Users = () => {
    const[users, setUser] = useState([])
    console.log(users)

    useEffect(() => {
        async function fetchUsers(){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const fetchedUsers = await response.json(response)
                setUser(fetchedUsers)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])
  return (
    <div>
        {users.map(users => (
            <p key={users.id}>{users.name},{users.phone}, {users.username} </p>
        ))}
    </div>
  )
}

export default Users