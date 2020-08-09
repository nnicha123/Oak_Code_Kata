module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(50),
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    }
  })
  User.associate = models => {
    User.belongsToMany(models.new, {
      through: models.read,
    })
  }
  return User
}