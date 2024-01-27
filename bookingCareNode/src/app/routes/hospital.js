import express from 'express'
import HospitalController from '../controller/HospitalController.js'

const router = express.Router()
router.post('/hospitalInfor', HospitalController.createHospitalInfor)
router.get('/hospitalInfor/:hospitalKey', HospitalController.getHospitalInfor)