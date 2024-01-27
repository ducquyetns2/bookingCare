import { Sequelize } from 'sequelize'
import { SQL } from '../constant.js'
const sequelize = new Sequelize(SQL.database, SQL.user, SQL.password, {
    host: SQL.host,
    dialect: SQL.dialect
})
sequelize.sync()
export default sequelize