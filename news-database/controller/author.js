const db = require('../models')

const getNewsFromAuthor = async (req, res) => {
  const author_id = req.params.author_id
  const news = await db.new.findAll({ where: { id: author_id } })
  res.status(200).send(news);
}
const addAuthor = async (req, res) => {
  const { username, password } = req.body
  const newAuthor = await db.author.create({ username, password })
  res.status(201).send(newAuthor)
}

const postNews = async (req, res) => {
  const { img, headline, description } = req.body
  const author_id = req.params.author_id;
  const news = await db.new.create({ img, headline, description, author_id })
  res.status(201).send(news);
}

module.exports = { postNews, addAuthor, getNewsFromAuthor }