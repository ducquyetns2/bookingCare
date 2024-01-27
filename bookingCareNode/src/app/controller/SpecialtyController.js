import formidableConfig from '../../config/formidableConfig.js'
import SpecialtyInfor from '../model/SpecialtyInfor.js'

class SpecialtyController {
    createSpecialtyInfor(req, res) {
        const dir = 'src/public/uploads/sectionImages'
        const formidable = formidableConfig(dir)
        formidable.parse(req, (error, fields, file) => {
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
            SpecialtyInfor.findOrCreate({
                where: { specialtyKey: fields.specialtyKey },
                defaults: infor
            }).then(([finded, created]) => {
                if (created) {
                    res.status(200).json({
                        error: false,
                        type: 'create',
                        message: 'Create specialty information successfully'
                    })
                } else {
                    if (file.imageFile && finded.dataValues.filePath) {
                        fs.unlink(finded.dataValues.filePath, () => { })
                    }
                    SpecialtyInfor.update(infor, {
                        where: { specialtyKey: fields.specialtyKey }
                    }).then(() => {
                        res.status(200).json({
                            error: false,
                            type: 'edit',
                            message: 'update specialty information successfully'
                        })
                    })
                }
            })
        })
    }
    getSpecialtyInfor(req, res) {
        let specialtyKey = req.params.specialtyKey
        if (specialtyKey) {
            SpecialtyInfor.findOne({
                where: { specialtyKey: specialtyKey },
                raw: true,
                attributes: {
                    exclude: ['filePath']
                }
            })
                .then(result => {
                    res.status(200).json({
                        error: false,
                        message: 'Get specialty information successfully',
                        data: result
                    })
                })
        } else {
            res.status(200).json({
                error: true,
                message: 'Missing parameter or unvalid parameter'
            })
        }
    }
    getAllSpecialtyInfor(req, res) {
        SpecialtyInfor.findAll({
            include: [
                {
                    model: Define, as: 'specialtyName', attributes: {
                        exclulde: ['roleMap']
                    }
                }
            ],
            nest: true, raw: true
        }).then(result => {
            res.status(200).json({
                error: false,
                message: 'Get all specialty information successfully',
                data: result
            })
        })

    }
}

export default new SpecialtyController()