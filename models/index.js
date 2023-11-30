const dbConfig = require("../config/connectDB.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const User = require("./user.js")(sequelize, Sequelize);
const Follower = require("./follower.js")(sequelize, Sequelize, User);
const Post = require("./post.js")(sequelize, Sequelize, User);
const PostMedia = require("./post.js")(sequelize, Sequelize, Post);

Follower.belongsTo(User, {
  foreignKey: "FollowerID",
  as: "Follower",
  onDelete: "CASCADE",
  targetKey: "UserId",
});
Follower.belongsTo(User, {
  foreignKey: "FollowedUserID",
  as: "FollowedUser",
  onDelete: "CASCADE",
  targetKey: "UserId",
});

//one to Many
Post.belongsTo(User, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});

// Thiết lập mối quan hệ PostMedia thuộc về Post
PostMedia.belongsTo(Post, {
  foreignKey: "postID",
  onDelete: "CASCADE",
});

db.User = User;
db.Follower = Follower;
db.Post = Post;
db.PostMedia = PostMedia;

module.exports = db;
