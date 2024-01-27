import HospitalRepository from '../repository/HospitalRepository.js'

import formidableConfig from '../../config/formidableConfig.js'
import HospitalRepository from '../repository/HospitalRepository.js'

let dir= 'src/public/uploads/sectionImages'
const formidable= formidableConfig(dir)

class HospitalService {
    async createHospitalInfor(req) {
        formidable.parse(req).then(async (fields, file) => {
            let infor = fields
            if (file.imageFile) {
                let imagePath = req.protocol + '://' + req.get('host') + '/uploads/sectionImages/'
                    + file.imageFile.newFilename
                infor = {
                    ...fields,
                    imagePath: imagePath,
                    filePath: file.imageFile.filepath
                }
            }
            return await HospitalRepository.createHospitalInfor(infor)
        }).catch(e => {
            throw Error(e.message)
        })
    }
    async updateHospitalInfor(hospitalId,req) {
        try {
            let findedHospital=await HospitalRepository.getHospitalInfor(hospitalId)
            formidable.parse(req).then(async (fields,file) => {
                let infor = fields
                if (file.imageFile) {
                    let imagePath = req.protocol + '://' + req.get('host') + '/uploads/sectionImages/'
                        + file.imageFile.newFilename
                    infor = {
                        ...fields,
                        imagePath: imagePath,
                        filePath: file.imageFile.filepath
                    }
                }
                if (file.imageFile && findedHospital.filePath) {
                fs.unlink(findedHospital.filePath, () => {})
                }
                return await HospitalRepository.update(hospitalId,infor)
            }).catch(e => {
                throw Error(e.message)
            })
        } catch(e) {
            throw Error(e.message)
        }
    }
    getHospitalInfor(hospitalId) {
        try {
            if(id) {
                return HospitalRepository.getHospitalInfor(hospitalId)
            } else {
                return HospitalRepository.getAllHospitalInfor()
            }
        } catch(e) {
            throw Error(e.message)
        }
    }
}
export default new HospitalService()