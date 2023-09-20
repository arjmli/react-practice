import React from 'react'

export default function UserHeader() {

    const title = ['id', 'name', 'username', 'email', 'address']

  return (
    <tr>
        {title.map(item => <th key={item}>{item}</th>)}
    </tr>
  )
}