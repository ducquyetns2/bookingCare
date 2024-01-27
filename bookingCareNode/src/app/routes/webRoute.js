import userRouter from './user.js'
import defineRouter from './define.js'
import doctorRouter from './doctor.js'
import handbookRouter from './handbook.js'
import hospitalRouter from './hospital.js'
import orderTimeRouter from './orderTime.js'
import scheduleRouter from './schedule.js'
import specialtyRouter from './specitalty.js'

function webRoute(app) {
    app.use('/api/user', userRouter)
    app.use('/api/doctor', doctorRouter)
    app.use('/api/define', defineRouter)
    app.use('/api/handbook', handbookRouter)
    app.use('/api/hospital', hospitalRouter)
    app.use('/api/orderTime', orderTimeRouter)
    app.use('/api/schedule', scheduleRouter)
    app.use('/api/specialty', specialtyRouter)
}
export default webRoute