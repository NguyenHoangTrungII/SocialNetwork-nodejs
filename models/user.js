const bcryptjs = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
    },
    birthday: {
      type: Sequelize.STRING,
    },
    imageurl: {
      type: Sequelize.STRING,
    },
    // tokens: [
    //   {
    //     token: {
    //       type: Sequelize.STRING,
    //       allowNull: false,
    //     },
    //   },
    // ],
  });

  User.beforeCreate(async (user, options) => {
    if (user.changed("password")) {
      user.password = await bcryptjs.hash(user.password, 8);
    }
  });

  return User;
};
