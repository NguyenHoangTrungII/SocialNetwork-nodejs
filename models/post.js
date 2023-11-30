const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize, User) => {
  const Post = sequelize.define("Post", {
    PostID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // userID: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: User,
    //     key: "UserId",
    //   },
    // },
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
  });

  return Post;
};
