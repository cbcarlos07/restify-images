import * as multer from 'multer'
import * as shortid from 'shortid'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/')
    },
    filename: function (req, file, cb) {
      const name = shortid.generate()
      const originalName = file.originalname.split('.')
      const ext = originalName[1]
      const nameFile = `${name}.${ext}`
      cb(null, nameFile)
    }
  })
   
  const upload = multer({ storage: storage })
  export default upload