import DoctorService from '../services/DoctorService.js'

class DoctorControl {
    getDoctor(req, res) {
        let doctorId = parseInt(req.params.doctorId)
        try {
            let result=DoctorService.getDoctor(doctorId)
            res.status(200).json({
                error: false,
                message: 'Get doctor successfully',
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
    createOrUpdateDoctorInfor(req, res) {
        let doctorId = req.body.doctorId
        try {
            let result=DoctorService.createOrUpdateDoctorInfor(doctorId)
             if(result) {
                res.status(200).json({
                    error: false,
                    type: 'create',
                    message: 'Create doctor information successfully'
                })
             } else {
                res.status(200).json({
                    error: false,
                    type: 'edit',
                    message: 'update doctor information successfully'
                })
             }
        } catch(e) {
            res.status(401).json({
                error: true,
                message: e.message(),
                data: null
            })
        }
    }
    getDoctorInfor(req, res) {
        try {
            let doctorId = parseInt(req.params.doctorId)
            let result=DoctorService.getDoctorInfor(doctorId)
            res.status(200).json({
                error: false,
                message: 'Get doctor information successfully',
                data: result
            })
        } catch(e) {
            res.status(401).json({
                error: true,
                message: e.message(),
                data: null
            })
        }
    }   
}
export default new DoctorControl()