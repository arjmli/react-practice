import React, { Component } from 'react'
// import Editable from './Editable'
import EditableFunctionbase from './EditableFunctionbase/EditableFunctionbase'
import EditableClassbase from './EditableClassbase/EditableClassbase'
import UserTableClassbase from './UserTableClassbase/UserTableClassbase'
import UserTableFunctionbase from './UserTableFunctionbase/UserTableFunctionbase'


export default class App extends Component {

  render() {
    return (
      <div>
        {/* <EditableClassbase /> */}
        {/* <EditableFunctionbase /> */}
        {/* <UserTableClassbase /> */}
        <UserTableFunctionbase />
      </div> 
    )
  }
}
