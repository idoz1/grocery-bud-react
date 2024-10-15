import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(!newItemName.trim()) {
                toast.error('please provide value')
                return;
            }else {
                addItem(newItemName)
                setNewItemName('')
            }
        }}>
            <h4>grocery bud</h4>
            <div className="form-control">
                <input type="text" className='form-input' value={newItemName} onChange={(e) => setNewItemName(e.target.value)}/>
                <button type="submit" className='btn'>add item</button>
            </div>
        </form>
    )
}

export default Form