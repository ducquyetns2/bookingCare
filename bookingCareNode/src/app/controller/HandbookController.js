import HandbookService from '../services/HandbookService.js'

class HandbookController {
    createHandbookInfor(req, res) {
        try {
            let result=HandbookService.createHandbookInfor(req)
            res.status(200).json({
                error: false,
                type: 'edit',
                message: 'update handbook information successfully',
                data: result
            })
        }catch(e) {
            res.status(401).json({
                error: true,
                message: e.message(),
                data: null
            })
        }
    }
    getHandbookInfor(req, res) {
        let handbookId = parseInt(req.params.handbookId)
        try {
            let result=HandbookService.getHandbookInfor(handbookId)
            res.status(200).json({
                error: false,
                message: 'Get handbookInfor successfully',
                data: result
            })
        }catch(e) {
            res.status(401).json({
                error: true,
                message: e.message(),
                data: null
            })
        }
    }
    updateHandbookInfor(req,res) {
        let handbookId = parseInt(req.params.handbookId)
        try {
            let result=HandbookService.updateHandbookInfor(handbookId,req)
            res.status(200).json({
                error: false,
                type: 'edit',
                message: 'update handbook information successfully',
                data: result
            })
        }catch(e) {
            res.status(401).json({
                error: true,
                message: e.message(),
                data: null
            })
        }
    }
}
export default new HandbookController()