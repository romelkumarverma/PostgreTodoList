const express = require('express');
const { todoPost, todoGet, todoUpdate, todoDelete } = require('../Controller/todoAdd');
const route = express.Router();

route.post('/api/todo/post', todoPost);
route.get('/api/todo/get', todoGet)
route.put('/api/todo/update/:id', todoUpdate)
route.delete('/api/todo/delete/:id', todoDelete)

module.exports = { route }; 
