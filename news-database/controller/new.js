const db = require('../models')


const postNews = async (req, res) => {
  const { img, headline, description } = req.body
  const news = await db.new.create({ img, headline, description })
  res.status(201).send(news);
}
const getNews = async (req, res) => {
  const news = await db.new.findAll({})
  res.status(200).send(news);
}
const deleteNews = async (req, res) => {
  const toDelete = await db.new.findOne({ where: { id: req.params.newsId } })
  toDelete.destroy()
  res.status(200).send({ message: 'Deleted News' })
}

module.exports = {
  postNews, getNews, deleteNews
}