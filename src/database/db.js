const mysql = require('mysql')

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Gui132',
  database: 'mytask',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados.');
  }
});

module.exports = connection;