import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
const authRouter = Router()
const authController = new AuthController()


authRouter.post('/signup', authController.signupController)
authRouter.post('/signin', authController.signinController)
authRouter.get('/me', authController.getMeController)
authRouter.get('/signout', authController.signoutController)


export default authRouter;