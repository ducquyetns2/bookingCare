import HospitalInfor from '../model/HospitalInfor.js'

class HospitalRepository {
    async getHospitalInfor(hospitalId) {
        return await HospitalInfor.findOne({
            where: { hospitalId: hospitalId },
            raw: true,
            attributes: {
                exclude: ['filePath']
            }
        })
    }
    async getAllHospitalInfor() {
        return await HospitalInfor.findAll({
            raw: true
        })
    }
    async createHospitalInfor(infor) {
        let createdHospital=await HospitalInfor.create(infor)
        createdHospital.save()
        return createdHospital
    }
    async updateHospitalInfor(hospitalId,infor) {
        return await HospitalInfor.update(infor, {
            where: { hospitalId: hospitalId }
        })
    }
}
export default new HospitalRepository()