import express from 'express'
import ScheduleController from '../controller/ScheduleController.js'

const router = express.Router()
router.post('/doctorSchedule', ScheduleController.createSchedule)
router.get('/doctorSchedule',ScheduleController.getAllSchedule)