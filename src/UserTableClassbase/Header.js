import React, { Component } from 'react'

export default class Header extends Component {

    state = {
      title: ['id', 'name', 'username', 'email', 'address']
    }
  
    render() {
      return (
          <tr>
          {this.state.title.map(title => <th key={title}>{title}</th>)}
          </tr>
          
      )
    }
  }