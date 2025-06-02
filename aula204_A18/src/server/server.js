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
  database: 'estoque1_js'
});

app.use(cors());
app.use(express.json());

//Estoque
app.get('/todosusuarios', (req, res) => { 
  const query = 'SELECT * FROM usuario';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/tiposcolab', (req, res) => { 
  const query = 'SELECT * FROM tipousuario';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

//Estoque - Colaboradores
app.post('/novocolab', (req, res) => {
  const { s_nome_usuario, n_tipousuario_usuario, c_status_usuario, s_foto_usuario, numtelefones } = req.body;
  const query1 = `INSERT INTO usuario (n_usuario_usuario, s_nome_usuario, n_tipousuario_usuario, c_status_usuario, s_foto_usuario) VALUES (NULL, ?, ?, ?, ?)`;
  const values = [s_nome_usuario, n_tipousuario_usuario, c_status_usuario, s_foto_usuario];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao inserir dados no servidor');
    }

    const usuarioId = results.insertId;
    if(Array.isArray(numtelefones) && numtelefones.length > 0){
      const telefonesValues = numtelefones.map(tel => [null, usuarioId, tel]);
      const query2 = `INSERT INTO telefone (n_telefone_telefone, n_usuario_telefone, s_numero_telefone) VALUES ?`;

      connection.query(query2, [telefonesValues], (error2, results2) => {
        if(error2){
          console.error('Erro ao executar a query:', error2);
          return res.status(500).send('Erro ao inserir telefones');
        }
        res.json(results2);
      });
    }else{
      res.status(200).json({ mensagem: "Novo colaborador gravado!" });
    }
  });
});

app.get('/dadoscolab/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM usuario WHERE n_usuario_usuario = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/telefonescolab/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM telefone WHERE n_usuario_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.put('/editarcolab/:id', (req, res) => {
  const { s_nome_usuario, n_tipousuario_usuario, c_status_usuario, s_foto_usuario, numtelefones } = req.body;
  const id = req.params.id
  const query1 = `UPDATE usuario SET s_nome_usuario = ?, n_tipousuario_usuario = ?, c_status_usuario = ?, s_foto_usuario = ? WHERE n_usuario_usuario = ?`;
  const values = [s_nome_usuario, n_tipousuario_usuario, c_status_usuario, s_foto_usuario, id];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }

    const usuarioId = results.insertId;
    if(Array.isArray(numtelefones) && numtelefones.length > 0){
      const telefonesValues = numtelefones.map(tel => [null, usuarioId, tel]);
      const query2 = `INSERT INTO telefone (n_telefone_telefone, n_usuario_telefone, s_numero_telefone) VALUES ?`;

      connection.query(query2, [telefonesValues], (error2, results2) => {
        if(error2){
          console.error('Erro ao executar a query:', error2);
          return res.status(500).send('Erro ao inserir telefones');
        }
        res.json(results2);
      });
    }else{
      res.status(200).json({ mensagem: "Colaborador atualizado!" });
    }
  });
});

app.get('/deletartelefone/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'DELETE FROM telefone WHERE n_telefone_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});