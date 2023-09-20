import {useState} from 'react'
import '../EditableFunctionbase/style.css'

export default function EditableFunctionbase() {

    const [text, setText] = useState('This is a function base editable')
    const [edit, setEdit] = useState(false)

    const btnEditable = () => {
        setEdit(!edit)
    }

    const inputChange = (e) => {
        setText(e.target.value)
    }

  return (
    <div className='global'>
      <h3>Function base editable</h3>
        {!edit 
        ? <span className='text-field-span'>{text}</span> 
        : <input 
        onChange={inputChange} 
        value={text} 
        autoFocus 
        className='text-field-input'/>}
        
        <button 
        onClick={btnEditable} 
        className='btn'>{!edit ? 'edit' : 'done'}
        </button>
    </div>
  )
}
