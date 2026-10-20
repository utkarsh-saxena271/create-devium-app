import 'dotenv/config'

function requireEnv(key:string): string{
    const val = process.env[key]
    if(!val){
        throw new Error(`Missing environment variable: ${key}`)
    }

    return val;
}

const envConfig = {
    PORT: requireEnv('PORT'),
    NODE_ENV: requireEnv('NODE_ENV')
}


export default envConfig;