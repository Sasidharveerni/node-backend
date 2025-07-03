const express = require('express')

const user = require('../models/user')


const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const {username, email, age} = req.body;

        const existingUser = await user.findOne({email: email})

        if(existingUser) {
            res.status(400).json({
                status: "Failed",
                message: "Hey, user already exists! Please use different email!!"
            })
        }

        const newUser = new user({
            username,
            email,
            age
        })
        await newUser.save();

        return res.status(200).json({
            status: 'Success',
            message: 'User registered successfully'
        })
    } catch (error) {
                return res.status(500).json({
            status: 'Error',
            message: 'Something went wrong',
            error: error,

        })
    }
})

module.exports = router