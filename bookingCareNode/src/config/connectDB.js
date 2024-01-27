import mssql from 'mssql'
import { SQL } from '../constant.js'

const config = {
    server: SQL.server,
    user: SQL.user,
    password: SQL.password,
    database: SQL.database,
    options: {
        trustServerCertificate: true
    }
}
const connectDB = await mssql.connect(config)
export default connectDB