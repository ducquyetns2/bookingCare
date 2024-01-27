import { DataTypes } from 'sequelize'
import sequelize from '../../config/sequelize.js'

const Schedule = sequelize.define('schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    bookedDate: DataTypes.STRING,
    bookedTimestamp: DataTypes.BIGINT,
    bookedTime: DataTypes.STRING,
    examinationReason: DataTypes.TEXT
}, {
    timestamps: false
})
export default Schedule