module.exports = {
    HOST: process.env.DB_HOST ,
    USER: process.env.POSTGRES_USER,
    PORT: process.env.DB_PORT,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DB: process.env.POSTGRES_DB,
    DIALECT: process.env.DB_DIALECT,
  };