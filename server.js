require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT;

// set up middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.get('/', (req, res) => res.status(200).send('Server is Running.'));

app.listen(port, () => {
    console.log(`⚡Server is running 👉 https://localhost:${port}`);
});