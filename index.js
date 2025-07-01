// Express Js is the framework for NodeJS 

// It is a backend framework!!

// Backend - A server which responds to client with requests

// We will design backend from scratch - API Designing, Database Design

// Steps to create NodeJS backend

// 1. You need to create one folder
// 2. Open the terminal inside of your folder.
// 3. npm init -y
// 4. Create index.js file inside the project folder.
// 5. npm i express
// 6. Copy the code
// 7. node index.js

const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.get('/:id', (req, res) => {
    res.send("Hey your server is up and running!!")
})

app.get('/home/:id', (req, res) => {
    res.send("Hello guys!!")
})

app.get('/download/resume', (req, res) => {
    res.sendFile(__dirname + '/Sasi_Resume.pdf')
})

// app.listen(3000, (req, res) => {
//     console.log("Server is running on port 3000!!")
// })

app.listen(process.env.port, (req, res) => {
    mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log('MongoDb is connected')
    }).catch((err) => {
        console.error("There is a problem in connecting")
    })
})

