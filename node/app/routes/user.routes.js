module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
 
    // Create a new user
    app.post('/users', users.create);

    // login by user
    app.get('/users/:name/:mail', users.getById);

 
 }
 