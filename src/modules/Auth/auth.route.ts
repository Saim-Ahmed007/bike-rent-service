import express from 'express'
import validateRequest from '../../app/middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'

const router = express.Router()

router.post('/login', validateRequest(AuthValidation.loginValidationSchema),AuthController.userLogin)
export const AuthRoutes = router