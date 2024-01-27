import HandbookInfor from '../model/HandbookInfor.js'

class HandbookRepository {
    async getHandbookInfor(handbookId) {
        return await HandbookInfor.findOne({
            where: { handbookId: handbookId },
            raw: true,
            attributes: {
                exclude: ['filePath']
            }
        })
    }
    async getAllHandbookInfor() {
        return await HandbookInfor.findAll({
            raw: true
        })
    }
    async createHandbookInfor(infor) {
        let createdHandbook=await HandbookInfor.create(infor)
        createdHandbook.save()
        return createdHandbook
    }
    async updateHandbookInfor(handbookId,infor) {
        return await HandbookInfor.update(infor, {
            where: { handbookId: handbookId }
        })
    }
}
export default new HandbookRepository()