import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';
import '../css/ShowTodo.css'
import { TODO } from '../graphQL/queries';
import { UPDATE_DONE, DELETE_TODO, UPDATE_DESCRIPTION } from '../graphQL/mutation'

function ShowTodo() {
    const [todos, setTodos] = useState([])
    const { loading, error, data, refetch} = useQuery(TODO)
    const [updateDone] = useMutation(UPDATE_DONE)
    const [deleteTodo] = useMutation(DELETE_TODO)

    useEffect(() => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        if(data) setTodos(data.todos)
    }, [data, loading, error])

    function handleClick(id, done) {
        updateDone(
            { variables : { 
                id : id,
                done : !done
            }
        })
    }
    
    function handleDelete(id) {
        deleteTodo(
            {
                variables : {
                    id
                }
            }
        )
        refetch()
    }

    return (
        <div className='todos'>
            {todos.map(todo => 
                <p className="todo-items" id='todo-id' key={todo.id}>
                <span  
                    className={todo.done?'todo-item':'false-todo-item'}
                    id = "item-id" 
                    onClick={() => {
                        handleClick(todo.id, todo.done)
                    }}
                >
                {todo.description}
                </span>
                <button className="right-tab" onClick={() => handleDelete(todo.id)}>delete</button>
                <button className="right-tab">edit</button>
                </p>
            )}
        </div>
    )
  }
  
export { ShowTodo }