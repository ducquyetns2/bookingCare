import express from 'express'
import DefineControl from '../controller/DefineControl.js'
const router = express.Router()

router.get('/time', DefineControl.getTime)
router.get('/gender', DefineControl.getGender)
router.get('/position', DefineControl.getPosition)
router.get('/department', DefineControl.getDepartment)
router.get('/price', DefineControl.getPrice)
router.get('/province', DefineControl.getProvince)
router.get('/payment', DefineControl.getPayment)
router.get('/specialty', DefineControl.getSpecialty)
router.get('/hospital', DefineControl.getHospital)

export default router 