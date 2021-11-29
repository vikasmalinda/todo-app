import { v4 as uuidv4 } from 'uuid';

const Mutation = {
    createTodo(parent, args, { db }, info) {
        const todo = {
            id : uuidv4(),
            description : args.description,
            done : false
        }

        db.todos.push(todo)

        return todo
    },
    deleteTodo(parent, args, { db }, info) {
        db.todos = db.todos.filter((todo) => todo.id != args.id)
        return db.todos
    },
    updateDone(parent, args, { db }, info) {
        const todoIndex = db.todos.findIndex((todo) => todo.id === args.id)
        if(todoIndex === -1) throw new Error('todo not found')
        db.todos[todoIndex].done = args.done

        return db.todos[todoIndex]
    },
    updateDescription(parent, args, { db }, info) {
        const todoIndex = db.todos.findIndex((todo) => todo.id === args.id)
        if(todoIndex === -1) throw new Error('todo not found')
        db.todos[todoIndex].description = args.description

        return db.todos[todoIndex]
    }

}

export { Mutation as default}