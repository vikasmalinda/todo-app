import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_TODO } from '../graphQL/mutation'
import  '../css/AddTodo.css'

function AddTodo() {
    const [addTodo] = useMutation(CREATE_TODO)
    const [description, setDescription] = useState('')

    return (
        <div className = "addTodo">
            <label htmlFor="add-todo">
                Add Todo : 
            </label>
            <input id="add-todo" value={description}
                onChange={e => setDescription(e.target.value)}>
            </input>
            <button 
                onClick={e => {
                    e.preventDefault()
                    addTodo({ variables: { description } })
                    setDescription('')
                }}
            >
            Add</button>
        </div>
    )
}

export { AddTodo }