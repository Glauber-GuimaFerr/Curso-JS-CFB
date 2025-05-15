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

  app.get('/pesquisarcontatos/:tipo/:pesq', (req, res) => {
    const tipo = req.params.tipo;
    const pesq = req.params.pesq;
  
    let coluna;
    switch (tipo) {
      case 'id':
        coluna = 'n_contato_contato';
        break;
      case 'nome':
        coluna = 's_nome_contato';
        break;
      case 'nasc':
        coluna = 'dt_dtnasc_contato';
        break;
      case 'email':
        coluna = 's_email_contato';
        break;
    }
  
    const query = `SELECT * FROM contato WHERE ${coluna} LIKE ?`;
    const pesqParam = `%${pesq}%`;
  
    connection.query(query, [pesqParam], (error, results) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return res.status(500).send('Erro no servidor');
      }
      res.json(results);
    });
  });

  app.get('/pesquisartodoscontatos', (req, res) => {
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

app.put('/atualizarcontatos/:id', (req, res) => {
    const { nome, celular, email, nasc } = req.body;
    const id = req.params.id;
    const query = `UPDATE contato SET s_nome_contato = ?, s_celular_contato = ?, s_email_contato = ?, dt_dtnasc_contato = ? WHERE n_contato_contato = ?`;

    connection.query(query, [nome, celular, email, nasc, id], (error, results) => {
        if (error) {
            console.error('Erro ao executar a query:', error);
            return res.status(500).send('Erro ao atualizar dados no servidor');
        }
        res.json(results);
    });
});

app.get('/deletarcontatos/:id', (req, res) => {
    const parametro = req.params.id;
    const query = `DELETE FROM contato WHERE n_contato_contato = ?`;

    connection.query(query, [parametro], (error, results) => {
        if (error) {
            console.error('Erro ao executar a query:', error);
            return res.status(500).send('Erro ao deletar dados no servidor');
        }
        res.json(results)
    });
});

  app.get('/filtrar/:nome', (req, res) => {
  const parametro = req.query.nome || '';
  const query = 'SELECT * FROM contato WHERE s_nome_contato like ?';
  const filtrarParam = `%${parametro}%`

  connection.query(query, [filtrarParam], (error, results) => {
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
