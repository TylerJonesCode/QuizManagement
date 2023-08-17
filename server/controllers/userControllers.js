const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const argon2 = require('argon2')

const getUser = asyncHandler((req, res) => {
    res.send('getUser')
})

const loginUser = asyncHandler((req, res) => {
    res.send('loginUser')
})

const createUser = asyncHandler((req, res) => {
    res.send('createUser')
})

const updateUser = asyncHandler((req, res) => {
    res.send('updateUser')
})

const deleteUser = asyncHandler((req, res) => {
    res.send('deleteUser')
})

module.exports = {getUser, loginUser, createUser, updateUser, deleteUser}