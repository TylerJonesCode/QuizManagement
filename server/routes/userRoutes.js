const express = require('express')
const router = express.Router()
const {getUser, loginUser, createUser, updateUser, deleteUser} = require('../controllers/userControllers')

router.route('/register')
    .post(createUser)

router.route('/login')
    .post(loginUser)

router.route('/profile')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router