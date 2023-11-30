module.exports = (sequelize, Sequelize, Post) => {
  const PostMedia = sequelize.define("postmedia", {
    MediaID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postID: {
      type: Sequelize.INTEGER,
      references: {
        model: Post,
        key: "PostID",
      },
    },
    mediaURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // Các trường thông tin phương tiện khác nếu cần thiết
  });

  // Thiết lập mối quan hệ PostMedia thuộc về Post
  PostMedia.belongsTo(Post, {
    foreignKey: "postID",
    onDelete: "CASCADE",
  });

  return PostMedia;
};
