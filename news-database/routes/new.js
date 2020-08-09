const express = require('express')
const router = express.Router()
const newsController = require('../controller/new')

router.post('/:authorId', newsController.postNews);
router.get('/', newsController.getNews);
router.delete('/:newsId', newsController.deleteNews)
module.exports = router