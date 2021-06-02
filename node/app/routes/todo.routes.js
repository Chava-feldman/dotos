module.exports = (app) => {
    const todos = require('../controllers/todo.controller.js');

    // Get a todo with todoId
    app.get('/todos/:userId', todos.getById);

    // Update a todo with todoId
    app.put('/todos/:todoId', todos.update);

    // Delete a todo with todoId
    app.delete('/todos/:todoId', todos.delete);

    // Create a new todo
    app.post('/todos', todos.create);

}
