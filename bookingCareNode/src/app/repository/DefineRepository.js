import Define from '../model/Define.js'

class DefineRepository {
    async getDefine(define) {
        return await Define.findAll({
            where: { roleMap: define },
            attributes: {
                exclude: ['roleMap']
            },
            raw: true
        })
    }
}
export default new DefineRepository()