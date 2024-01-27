import formidableConfig from '../../config/formidableConfig.js'
import HandbookRepository from '../repository/HandbookRepository.js'

let dir= 'src/public/uploads/sectionImages'
const formidable= formidableConfig(dir)
class HandbookService {
    getHandbookInfor(handbookId) {
        try {
            if(id) {
                return HandbookRepository.getHandbookInfor(handbookId)
            } else {
                return DoctorRepository.getAllHandbookInfor()
            }
        } catch(e) {
            throw Error(e.message)
        }
    }
    async createHandbookInfor(req) {
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
            return await HandbookRepository.createHandbookInfor(infor)
        }).catch(e => {
            throw Error(e.message)
        })
    }
    async updateHandbookInfor(handbookId,req) {
        try {
            let findedHandbook=await HandbookRepository.getHandbookInfor(handbookId)
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
                if (file.imageFile && findedHandbook.filePath) {
                fs.unlink(findedHandbook.filePath, () => {})
                }
                return await HandbookRepository.update(handbookId,infor)
            }).catch(e => {
                throw Error(e.message)
            })
        } catch(e) {
            throw Error(e.message)
        }
    }
}
export default new HandbookService()