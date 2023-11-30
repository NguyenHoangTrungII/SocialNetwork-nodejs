module.exports = {
  HOST: "localhost",
  USER: "trung1",
  PASSWORD: "123",
  DB: "SocialNetWork",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
