module.exports = (sequelize, DataTypes) => {
  const New = sequelize.define('new', {
    img: {
      type: DataTypes.STRING(1000)
    },
    headline: {
      type: DataTypes.STRING(400),
      unique: true,
    },
    description: {
      type: DataTypes.STRING(3000),
    }
  })
  New.associate = models => {
    New.belongsToMany(models.user, {
      through: models.read,
    })
    New.belongsTo(models.author, { foreignKey: 'author_id' })
  }
  return New
}