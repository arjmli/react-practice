import React, { Component } from 'react'
import '../EditableClassbase/style.css'

export default class EditableClassbase extends Component {

    state = {
      text: 'This is an class base editable ',
      edit: false
    }

    btnEditable = () => {
      this.setState(({edit: !this.state.edit}))
    }

    inputChange = (e) => {
      this.setState(({text: e.target.value}))
    }

  render() {
    return (
      <div className='global'>
        <h3>Class base editable</h3>
        {!this.state.edit 
        ? <span className="text-field-span">{this.state.text}</span> 
        : <input
        value={this.state.text} 
        onChange={this.inputChange}
        autoFocus
        className='text-field-input'
        />}

        <button onClick={this.btnEditable} className='btn'>
            {this.state.edit ? 'done' : 'edit'}
        </button>
      </div>
    )
  }
}
