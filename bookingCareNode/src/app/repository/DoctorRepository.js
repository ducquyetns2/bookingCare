import DoctorInfor from '../model/DoctorInfor.js'

class DoctorRepository {
    async getDoctor(doctorId) {
            return await User.findOne({
                where: { id: doctorId },
                attributes: {
                    exclude: ['useName', 'password', 'email', 'phoneNumber', 'department',
                        'filePath', 'createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: Define, as: 'genderData', attributes: {
                            exclude: 'roleMap'
                        },
                    }, {
                        model: Define, as: 'positionData', attributes: {
                            exclude: 'roleMap'
                        },
                    }
                ],
                nest: true,
                raw: true
            })
    }
    async getAllDoctor() {
        return await User.findAll({
            where: { department: department.DOCTOR },
            raw: true,
            attributes: {
                exclude: ['useName', 'password', 'filePath', 'email', 'phoneNumber',
                    'department', 'createdAt', 'updatedAt']
            },
            include: [
                {
                    model: Define, as: 'genderData', attribute: {
                        exclude: ['roleMap']
                    },
                }, {
                    model: Define, as: 'positionData', attribute: {
                        exclude: ['roleMap']
                    },
                }, {
                    model: Define, as: 'departmentData', attribute: {
                        exclude: ['roleMap']
                    }
                }
            ],
            nest: true
        })
    }
    async createorUpdateDoctorInfor(doctorId) {
        await DoctorInfor.findOrCreate({
            where: { doctorId: doctorId },
            defaults: req.body
        }).then(([user, created]) => {
            if (created) {
               return true
            } else {
                DoctorInfor.update(req.body, {
                    where: { doctorId: doctorId }
                }).then(() => {
                    return false
                })
            }
        })
    }
    async getDoctorInfor(doctorId) {
        return await DoctorInfor.findOne({
            where: { doctorId: doctorId },
            raw: true,
            include: [
                {
                    model: Define, as: 'priceData', attribute: {
                    exclude: ['roleMap']
                    }
                }, {
                    model: Define, as: 'paymentData', attribute: {
                    exclude: ['roleMap']
                    }
                    }, {
                    model: Define, as: 'provinceData', attribute: {
                    exclude: ['roleMap']
                }
                }, {
                    model: Define, as: 'specialtyData', attribute: {
                    exclude: ['roleMap']
                }
                }, {
                    model: Define, as: 'hospitalData', attribute: {
                    exclude: ['roleMap']
                }
                },
            ],
            nest: true
        })
    }   
}
export default new DoctorRepository()