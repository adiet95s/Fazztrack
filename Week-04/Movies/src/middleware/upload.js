const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null,`${Date.now()}-${file.originalname}` )
    }
})

const filter = (req, file, cb) => {
    if(file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Not Image File'), false)
    }
}

module.exports = multer({
    storage: multerStorage,
    fileFilter: filter
})