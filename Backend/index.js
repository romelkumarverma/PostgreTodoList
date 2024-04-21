const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());

const PORT = 5200;

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

const { route } = require('./Routes/todoAdd'); 
app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`); 
});
