import { gql } from '@apollo/client'

const UPDATE_DONE = gql`
    mutation updateDone($id : ID!, $done : Boolean!) {
        updateDone(id : $id, done : $done) {
            id
            description
            done
        }
    }
`

const CREATE_TODO = gql`
    mutation createTodo($description : String!) {
        createTodo(description : $description) {
            id
            description
            done
        }
    }
`

const DELETE_TODO = gql`
    mutation deleteTodo($id : ID!) {
        deleteTodo(id : $id) {
            id
        }
    }
`

const UPDATE_DESCRIPTION = gql`
    mutation updateDescription($id : ID!, $description : String!) {
        updateDescription(id : $id, description : $description) {
            id
            description
        }
    }
`

export { UPDATE_DONE, CREATE_TODO, DELETE_TODO, UPDATE_DESCRIPTION }