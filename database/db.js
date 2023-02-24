const mysql = require('mysql');
const conexion = mysql.createConnection({
    database: "users",
    user: "5zqq99e245hi9qa9irf1",
    host: "us-east.connect.psdb.cloud",
    password: "pscale_pw_Oh6AYIA70777i2tQ7JybSBsnfSpvrjZqtVYHaCOIgUi",
    ssl: {
      rejectUnauthorized: false
    }
});

conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

module.exports = conexion;