const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'agenda1_js'
});

app.use(cors());
app.use(express.json());

app.get('/contatos', (req, res) => {
  const parametro = req.query.id || 1;
  const query = 'SELECT * FROM contato';

  connection.query(query, [parametro], (error, results) => {
    if (error) {
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.post('/addcontatos', (req, res) => {
    const { f_nome, f_celular, f_email, f_dtnasc } = req.body;
    const query = `INSERT INTO contato (s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) VALUES (?, ?, ?, ?)`
    const values = [f_nome, f_celular, f_email, f_dtnasc];
  
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return res.status(500).send('Erro ao inserir dados no servidor');
      }
      res.json(results);
    });
  });

app.post('/editarcontatos', (req, res) => {
    const parametro = req.query.id || 1;
    const query = 'SELECT * FROM contato';
  
    connection.query(query, [parametro], (error, results) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return res.status(500).send('Erro no servidor');
      }
      res.json(results);
    });
  });

app.get('/deletarcontatos/:id', (req, res) => {
    const parametro = req.query.id || 1;
    const query = 'SELECT * FROM contato';
  
    connection.query(query, [parametro], (error, results) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return res.status(500).send('Erro no servidor');
      }
      res.json(results);
    });
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
