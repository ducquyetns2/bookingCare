import DefineService from '../services/DefineService.js'

class DefineControl {
    getGender(req, res) {
        try {
            let result=DefineService.getDefine('gender')
            res.status(200).json({
                error: false,
                message: 'Get gender successfully',
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
    getPosition(req, res) {
        try {
            let result=DefineService.getDefine('position')
            res.status(200).json({
                error: false,
                message: 'Get position successfully',
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
    getDepartment(req, res) {
        try {
            let result=DefineService.getDefine('department')
            res.status(200).json({
                error: false,
                message: 'Get department successfully',
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
    getPrice(req, res) {
        try {
            let result=DefineService.getDefine('price')
            res.status(200).json({
                error: false,
                message: 'Get price successfully',
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
    getProvince(req, res) {
        try {
            let result=DefineService.getDefine('provice')
            res.status(200).json({
                error: false,
                message: 'Get provice successfully',
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
    getPayment(req, res) {
        try {
            let result=DefineService.getDefine('payment')
            res.status(200).json({
                error: false,
                message: 'Get payment successfully',
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
    getSpecialty(req, res) {
        try {
            let result=DefineService.getDefine('specialty')
            res.status(200).json({
                error: false,
                message: 'Get specialty successfully',
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
    getHospital(req, res) {
        try {
            let result=DefineService.getDefine('hospital')
            res.status(200).json({
                error: false,
                message: 'Get hospital successfully',
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
    getTime(req, res) {
        try {
            let result=DefineService.getDefine('time')
            res.status(200).json({
                error: false,
                message: 'Get time successfully',
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
export default new DefineControl()