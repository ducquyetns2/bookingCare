import express from 'express'
import cors from 'cors'
import { clientHttp } from '../constant.js'

function config(app) {
    // Static file
    app.use(express.static('src/public'))
    // Data transfer
    app.use(express.urlencoded({
        extended: true,
        limit: '50mb'
    }))
    app.use(express.json({
        limit: '50mb'
    }))
    // Cors agree to accept frontend 
    app.use(cors({
        origin: clientHttp
    }))
}
export default config