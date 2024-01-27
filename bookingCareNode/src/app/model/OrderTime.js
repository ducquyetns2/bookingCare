import { DataTypes } from 'sequelize'
import sequelize from '../../config/sequelize.js'

const OrderTime = sequelize.define('orderTime', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    doctorId: DataTypes.INTEGER,
    bookedDate: DataTypes.STRING,
    timestamp: DataTypes.BIGINT,
    time: DataTypes.STRING
}, {
    timestamps: false
})
export default OrderTime