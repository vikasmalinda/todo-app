const Query = {
    greetings(parent, args, ctx, info) {
        return "Welcome to Todo Application"
    },
    todos(parent, args, ctx, info) {
        return ctx.db.todos
    }
}

export { Query as default }