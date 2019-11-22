const express = require('express');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

//Middleware
app.use(express.json());

//Route
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

//export app
module.exports = app;
