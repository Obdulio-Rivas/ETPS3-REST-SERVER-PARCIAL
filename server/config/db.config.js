const PRO_BD_CONFIG = {
  HOST: "bd6qforroqh8henvuzp5-mysql.services.clever-cloud.com",
  USER: "uvbnxxxauyewtc2z",
  PASSWORD: "bCC49Yfv20Ky8Tmeulg7",
  DB: "bd6qforroqh8henvuzp5",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

const DEV_BD_CONFIG = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "parcial_ETPS3",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = {
    HOST: PRO_BD_CONFIG.HOST,
    USER: PRO_BD_CONFIG.USER,
    PASSWORD: PRO_BD_CONFIG.PASSWORD,
    DB: PRO_BD_CONFIG.DB,
    dialect: PRO_BD_CONFIG.dialect,
    pool: PRO_BD_CONFIG.pool
  };