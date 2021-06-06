const apiRouterHomepage = require('express').Router();
const multer = require('multer')
const { nanoid } = require("nanoid");

const { setAvatars } = require('../controllers/homepageController')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/avatar`)
  },
  filename: function (req, file, cb) {
    const extension = '.' + file.originalname.split('.')[1]
    const currentUserAvaName = nanoid(10)
    cb(null, currentUserAvaName + extension)
  }
})
const upload = multer({ storage })

apiRouterHomepage.route('/:id')
  .get(setAvatars)
  .post((upload.single("avatar"), async (req, res) => {
    const { id } = req.params
    const { image } = req.files
    // const userAvatarPath = req.file.path

    console.log(id, '<---- id')
    console.log(image, '<---- image')


    res.json()
  }))

apiRouterHomepage.route('/oneEvent')
  .post()



module.exports = apiRouterHomepage

