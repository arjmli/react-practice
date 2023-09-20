import React, { Component, Fragment } from 'react'
import Header from './Header'
import '../UserTableClassbase/style/style.css'

export default class UserTableClassbase extends Component {

    state = {
        users: [],
        address: []
    }

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({users: data}))
    }

    render() {
      
    return (
      <div>
        <table>
          <Header />

          {this.state.users.map(user => (
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
}

