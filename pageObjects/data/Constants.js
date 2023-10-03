import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    VENCAURL: process.env.VENCAURL
}

export const CREDENTIALS = {
    VENCAUSER: process.env.VENCAUSER, 
    VENCAPASS: process.env.VENCAPASS
}