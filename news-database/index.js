const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const newsRoutes = require('./routes/new');
const authorRoutes = require('./routes/author');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) //cannot use in nest form (extended:false)
app.use('/news', newsRoutes);
app.use('/author', authorRoutes);

db.sequelize.sync().then(() => {
  app.listen(8000, () => console.log(`Server is running on 8000`))
})