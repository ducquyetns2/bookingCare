import Schedule from '../model/Schedule.js'

class ScheduleController {
    createSchedule(req, res) {
        Schedule.findAll({ where: { userId: req.body.userId } })
            .then(result => {
                if (result.length < 10) {
                    Schedule.findOrCreate({
                        where: { userId: req.body.userId, bookedTime: req.body.bookedTime },
                        defaults: req.body
                    }).then(([user, created]) => {
                        if (created) {
                            res.status(200).json({
                                error: false,
                                message: 'Create an appointment successfully'
                            })
                        } else {
                            res.status(200).json({
                                error: true,
                                isDulicate: true,
                                message: 'An appointment at this time has booked'
                            })
                        }
                    })

                } else {
                    res.status(200).json({
                        error: true,
                        message: 'Create exceed maximun'
                    })
                }
            })
    }
    getAllSchedule(req, res) {
        Schedule.findAll({ where: { userId: req.body.userId } })
        .then(result => {
            res.status(200).json({
                error: true,
                data:result,
                message: 'Get Schedule successfully'
            })
        })
    }
}
export default new ScheduleController