import express from 'express'
import envConfig from './config/env.config.js'


const app = express()
const PORT = envConfig.PORT





function main(){
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    }) 
}