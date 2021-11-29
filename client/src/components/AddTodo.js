import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { CREATE_TODO } from '../graphQL/mutation'
import  '../css/AddTodo.css'
import { TODO } from '../graphQL/queries'

function AddTodo() {
    const [addTodo] = useMutation(CREATE_TODO, {
        refetchQueries : [ TODO ],   
    })
    const [description, setDescription] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        if(description === '') {
            alert('Enter Description of the Todo')
        }
        else {
            addTodo({ variables: { description } })
            setDescription('')
        }
    }

    return (
        <div className = "add-todos">
            <label htmlFor="add-todo">
                Add Todo : 
            </label>
            <input id="add-todo" value={description}
                onChange={e => setDescription(e.target.value)}>
            </input>
            <button 
                onClick={handleClick}
            >
            Add</button>
        </div>
    )
}

export { AddTodo }