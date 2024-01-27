import express from 'express'
import HandbookController from '../controller/HandbookController.js'

const router = express.Router()
router.post('/handbookInfor', HandbookController.createHandbookInfor)
router.put('/handbookInfor/:handbookId', HandbookController.createHandbookInfor)
router.get('/handbookInfor/:handbookId', HandbookController.getHandbookInfor)

export default router