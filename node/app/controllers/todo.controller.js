const Todo= require('../models/todo.model.js');


 // Get todos with a userId
 exports.getById = (req, res) => {
    Todo.find({userId:req.params.userId})
        .then(oTodo => {
            res.send(oTodo);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "cant find such todo"
        });
    });
};


 // Update a todo by the todoId
 exports.update = (req, res) => {
    // Validate Request 
    if(!req.body) {
        return res.status(400).send({
            message: "Please enter todo"
        });
    }
 
    // Find todo and update it
    Todo.findByIdAndUpdate(req.params.todoId, {
        title: req.body.title,
        body: req.body.body,
        done:req.body.done
    }, {new: true})
        .then(oTodo => {
            if(oTodo) {
                res.send(oTodo);
            }
            return res.status(404).send({
                message: "no such todoid " + req.params.todoId
            });
 
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todos does not exist with todoid " + req.params.todoId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while retrieving the todo with todoid" + req.params.todoId
        });
    });
 };

  // Delete the todo with the todoId
exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId)
        .then(oTodo => {
            if(oTodo) {
                res.send({message: "todo has been deleted successfully!"});
            }
            return res.status(404).send({
                message: "todo not exist with todoid" + req.params.todoId
            });
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "todo not exist with todoid" + req.params.todoId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while deleting the todo with todoid" + req.params.todoId
        });
    });
 };


 // Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request because in model we required the title
    if(!req.body) {
        return res.status(400).send({
            message: "Please enter todo."
        });
    }
 
    // Create a todo
    const todo = new Todo({
        userId:req.body.userId,
        title: req.body.title,
        body:req.body.body,
        done: false
    });
    
    // Save todo in the database
    todo.save()
        .then(oTodo => {
            res.send(oTodo);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the todo."
        });
    });
 };

 // Get all and return all todos.
exports.getAll = (req, res) => {
    Todo.find()
        .then(oTodo => {
            res.send(oTodo);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the todo."
        });
    });
 };
