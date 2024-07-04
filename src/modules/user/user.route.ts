import express from 'express'
import { UserController } from './user.controller'
import auth from '../../app/middlewares/auth'

const router = express.Router()
router.post('/auth/signup', UserController.createUser)
router.get('/user/:id', auth(),  UserController.getSingleUser)
router.put('/user/:id',auth(), UserController.updateUser)


export const UserRoutes = router