module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    username: {
      type: DataTypes.STRING(50),
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    }
  })
  Author.associate = models => {
    Author.hasMany(models.new, {
      foreignKey: 'author_id'
    })
  }
  return Author
}