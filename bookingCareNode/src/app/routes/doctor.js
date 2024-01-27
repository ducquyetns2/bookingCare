import express from 'express'
import DoctorController from '../controller/DoctorController.js'

const router = express.Router()

router.post('/doctorInfor', DoctorController.createOrUpdateDoctorInfor)
router.get('/doctorInfor/:doctorId', DoctorController.getDoctorInfor)
router.get('/:doctorId', DoctorController.getDoctor)

export default router