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
app.get('/todaspessoas', (req, res) => { 
  const query = 'SELECT * FROM pessoa';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/tiposcolab', (req, res) => { 
  const query = 'SELECT * FROM tipopessoa';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar tipos de colaborador');
    }
    res.json(results);
  });
});

//Estoque - Colaboradores
app.post('/novocolab', (req, res) => {
  const { s_nome_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, numtelefones } = req.body;
  const query1 = `INSERT INTO pessoa (n_pessoa_pessoa, s_nome_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa) VALUES (NULL, ?, ?, ?, ?)`;
  const values = [s_nome_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao inserir dados no servidor');
    }

    const pessoaId = results.insertId;
    if(Array.isArray(numtelefones) && numtelefones.length > 0){
      const telefonesValues = numtelefones.map(tel => [null, pessoaId, tel]);
      const query2 = `INSERT INTO telefone (n_telefone_telefone, n_pessoa_telefone, s_numero_telefone) VALUES ?`;

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
  const query = 'SELECT * FROM pessoa WHERE n_pessoa_pessoa = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar colaborador');
    }
    res.json(results);
  });
});

app.get('/telefonescolab/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM telefone WHERE n_pessoa_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar telefones do colaborador');
    }
    res.json(results);
  });
});

app.put('/editarcolab/:id', (req, res) => {
  const { s_nome_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, numtelefones } = req.body;
  const id = req.params.id;
  const query1 = `UPDATE pessoa SET s_nome_pessoa = ?, n_tipopessoa_pessoa = ?, c_status_pessoa = ?, s_foto_pessoa = ? WHERE n_pessoa_pessoa = ?`;
  const values = [s_nome_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, id];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }

    if(Array.isArray(numtelefones) && numtelefones.length > 0){
      const telefonesValues = numtelefones.map(tel => [null, id, tel]);
      const query2 = `
        INSERT INTO telefone (n_telefone_telefone, n_pessoa_telefone, s_numero_telefone) VALUES ?`;

      connection.query(query2, [telefonesValues], (error2, results2) => {
        if(error2){
          console.error('Erro ao inserir novos telefones:', error2);
          return res.status(500).send('Erro ao inserir novos telefones');
        }
        res.json(results2);
      });
    }else{
      return res.status(200).json({ mensagem: "Colaborador atualizado!" });
    }
  });
});

app.get('/deletartelefone/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'DELETE FROM telefone WHERE n_telefone_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao excluir telefone');
    }
    res.json(results);
  });
});

app.get('/mudarstatuscolab/:id/:status', (req, res) => { 
  const id = req.params.id;
  const status = req.params.status;
  const query = 'UPDATE pessoa SET c_status_pessoa = ? WHERE n_pessoa_pessoa = ?';

  connection.query(query, [status, id], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao alterar status do colaborador');
    }
    res.json(results);
  });
});

app.get('/deletarcolab/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'DELETE FROM pessoa WHERE n_pessoa_pessoa = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao excluir colaborador');
    }
    res.json(results);
  });
});

app.get('/pesquisacolab/:tipo/:valor', (req, res) => { 
  const tipo = req.params.tipo;
  let valor = req.params.valor;
  let query = '';
  if(tipo == 'id'){
    query = 'SELECT * FROM pessoa WHERE n_pessoa_pessoa = ?';    
  }else{
    valor = `%${req.params.valor}%`;
    query = 'SELECT * FROM pessoa WHERE s_nome_pessoa LIKE ?';
  }

  connection.query(query, [valor], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar colaborador');
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});