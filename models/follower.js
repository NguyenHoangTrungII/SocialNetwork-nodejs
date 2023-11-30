const bcryptjs = require("bcryptjs");
// const User = require("./user");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize, User) => {
  const Follower = sequelize.define("follower", {
    FollowerID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: "UserId",
      },
    },

    FollowedUserID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: "UserId",
      },
    },
  });

  return Follower;
};
