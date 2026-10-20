import AuthService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.util.js";

class AuthController {
    constructor(){
        const authService = new AuthService()
    }
    signupController = asyncHandler( async (req,res) => {

    })

    signinController = asyncHandler( async (req,res) => {
        
    })

    getMeController = asyncHandler( async (req,res) => {
        
    })

    signoutController = asyncHandler( async (req,res) => {
        
    })
}

export default AuthController