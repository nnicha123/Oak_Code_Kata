const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models')


db.sequelize.sync().then(() => {
  app.listen(8000, () => console.log(`Server is running on ${process.env.PORT}`))
})