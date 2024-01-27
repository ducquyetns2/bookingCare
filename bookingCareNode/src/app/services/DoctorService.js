import DoctorRepository from '../repository/DoctorRepository.js'

class DoctorService {
    getDoctor(id) {
        try {
            if(id) {
                return DoctorRepository.getDoctor(id)
            } else {
                return DoctorRepository.getAllDoctor();
            }
        } catch(e) {
            throw Error(e.message)
        }
    }
    createOrUpdateDoctorInfor(id) {
        try {
            return DoctorRepository.createorUpdateDoctorInfor(id)
        } catch(e) {
            throw Error(e.message)
        }
    }
    getDoctorInfor(doctorId) {
        if (doctorId) {
            DoctorRepository.getDoctorInfor(doctorId)
        }
        else {
           throw Error('Missing parameter or unvalid parameter')
        }
    }   
}
export default new DoctorService()