const express = require('express')
const router = express.Router()
const authorController = require('../controller/author');

router.get('/:author_id', authorController.getNewsFromAuthor)
router.post('/:author_id', authorController.postNews);
router.post('/', authorController.addAuthor)
module.exports = router;