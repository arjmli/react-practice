import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'

export default function UserTableFunctionbase() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
        
    return (
     <div>
        <table>
            <Header />
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {Object.entries(user.address).map(([_, value]) => {
                            return <Fragment key={value}>{typeof value === 'string' ? value : ''}</Fragment>
                        })}
                    </td>
                </tr>
            ))}
        </table>
     </div>
  )
}



