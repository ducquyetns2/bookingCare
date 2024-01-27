import HospitalService from '../services/HospitalService.js'

class HospitalController {
    createHospitalInfor(req, res) {
        try {
            let result=HospitalService.createHospitalInfor(req)
            res.status(200).json({
                error: false,
                type: 'edit',
                message: 'update hospital information successfully',
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
    getHospitalInfor(req, res) {
        let HospitalId = parseInt(req.params.HospitalId)
        try {
            let result=HospitalService.getHospitalInfor(HospitalId)
            res.status(200).json({
                error: false,
                message: 'Get hospital information successfully',
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
    updateHospitalInfor(req,res) {
        let HospitalId = parseInt(req.params.HospitalId)
        try {
            let result=HospitalService.updateHospitalInfor(HospitalId,req)
            res.status(200).json({
                error: false,
                type: 'edit',
                message: 'update hospital information successfully',
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
export default new HospitalController()