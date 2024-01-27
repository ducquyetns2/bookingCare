import express from 'express'
import UserController from '../controller/UserController.js'

const router = express.Router()
router.delete('/user/:id', UserController.deleteUser)
router.put('/user/password', UserController.changePassword)
router.put('/editUser', UserController.editUser)
router.get('/user', UserController.getAllUser)
router.post('/compareUser', UserController.getUser)
router.post('/user', UserController.createUser)

export default router