import DefineRepository from '../repository/DefineRepository'

class DefineService {
    getDefine(define) {
        try {
            return DefineRepository.getDefine(define)
        }catch(e) {
            throw Error('Define are not valid')
        }
    }
}
export default new DefineService()