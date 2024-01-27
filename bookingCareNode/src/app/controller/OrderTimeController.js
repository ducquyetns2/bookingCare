import OrderTime from '../model/OrderTime.js'

class OrderTimeController {
    createOrderTime(req, res) {
        let orderTime = req.body
        OrderTime.destroy({
            where: { timestamp: orderTime[0].timestamp, doctorId: orderTime[0].doctorId }
        })
        if (orderTime[0].time) {
            DoctororderTime.bulkCreate(req.body).then(result => {
                console.log('số phần tử được tạo:', result.length)
                res.status(200).json({
                    error: false,
                    count: result.length,
                    message: 'Create orderTime successfully'
                })
            })
        } else {
            res.status(200).json({
                error: false,
                count: 0,
                message: 'No orderTime created'
            })
        }
    }
    getOrderTime(req, res) {
        let { doctorId, timestamp } = req.query
        if (doctorId && timestamp) {
            OrderTime.findAll({
                where: { doctorId, timestamp },
                raw: true,
                include: [
                    {
                        model: Define, as: 'timeData', attributes: {
                            exclude: ['roleMap']
                        }
                    }
                ],
                nest: true
            })
                .then(result => {
                    res.status(200).json({
                        error: false,
                        message: 'Get doctor orderTime successfully',
                        data: result
                    })
                })
        } else {
            res.status(200).json({
                error: true,
                message: 'Missing parameter or unvalid parameter'
            })
        }
    }
}
export default new OrderTimeController()