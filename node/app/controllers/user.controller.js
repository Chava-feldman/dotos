const User= require('../models/user.model.js');

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request because in model we required the title
    if(!req.body.name||!req.body.mail) {
        return res.status(400).send({
            message: "Please enter name and mail."
        });
    }
 
    // Create a user
    const user = new User({
        name: req.body.name,
        city: req.body.city,
        street: req.body.street,
        mail: req.body.mail,
        tell: req.body.tell
    });
 
    // Save Book in the database
    user.save()
        .then(oUser => {
            res.send(oUser);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
 };

 
 // Get a single user with a userId
exports.getById = (req, res) => {
    User.find({name:req.params.name,mail:req.params.mail})
        .then(oUser => {
            res.send(oUser);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "cant find such user"
        });
    });
};

