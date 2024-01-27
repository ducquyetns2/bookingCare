import express from 'express'
import SpecialtyController from '../controller/SpecialtyController.js'

const router = express.Router()
router.post('/specialtyInfor', SpecialtyController.createSpecialtyInfor)
router.get('/specialtyInfor/:specialtyKey', SpecialtyController.getSpecialtyInfor)