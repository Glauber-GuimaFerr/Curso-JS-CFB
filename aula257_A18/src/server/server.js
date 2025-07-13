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

//Estoque - Pessoas
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

app.get('/tipospessoa', (req, res) => { 
  const query = 'SELECT * FROM tipopessoa';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar tipos de pessoa');
    }
    res.json(results);
  });
});

app.post('/novapessoa', (req, res) => {
  const { s_nome_pessoa, s_email_pessoa, s_senha_pessoa, n_primacess_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, numtelefones } = req.body;
  const query1 = `INSERT INTO pessoa (n_pessoa_pessoa, s_nome_pessoa, s_email_pessoa, s_senha_pessoa, n_primacess_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [s_nome_pessoa, s_email_pessoa, s_senha_pessoa, n_primacess_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa];

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
      res.status(200).json({ mensagem: "Nova pessoa gravada!" });
    }
  });
});

app.get('/dadospessoa/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM pessoa WHERE n_pessoa_pessoa = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar pessoa');
    }
    res.json(results);
  });
});

app.get('/telefonespessoa/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM telefone WHERE n_pessoa_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar telefones da pessoa');
    }
    res.json(results);
  });
});

app.put('/editarpessoa/:id', (req, res) => {
  const { s_nome_pessoa, s_email_pessoa, s_senha_pessoa, n_primacess_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, numtelefones } = req.body;
  const id = req.params.id;
  const query1 = `UPDATE pessoa SET s_nome_pessoa = ?, s_email_pessoa = ?, s_senha_pessoa = ?, n_primacess_pessoa = ?, n_tipopessoa_pessoa = ?, c_status_pessoa = ?, s_foto_pessoa = ? WHERE n_pessoa_pessoa = ?`;
  const values = [s_nome_pessoa, s_email_pessoa, s_senha_pessoa, n_primacess_pessoa, n_tipopessoa_pessoa, c_status_pessoa, s_foto_pessoa, id];

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
      return res.status(200).json({ mensagem: "Pessoa atualizada!" });
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

app.get('/mudarstatuspessoa/:id/:status', (req, res) => { 
  const id = req.params.id;
  const status = req.params.status;
  const query = 'UPDATE pessoa SET c_status_pessoa = ? WHERE n_pessoa_pessoa = ?';

  connection.query(query, [status, id], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao alterar status da pessoa');
    }
    res.json(results);
  });
});

app.get('/deletarpessoa/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'DELETE FROM pessoa WHERE n_pessoa_pessoa = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao excluir pessoa');
    }
    res.json(results);
  });
});

app.get('/pesquisarpessoa/:tipo/:valor', (req, res) => { 
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
      return res.status(500).send('Erro ao recuperar pessoa');
    }
    res.json(results);
  });
});

//Estoque - Fornecedores
app.get('/todosfornecedores', (req, res) => { 
  const query = 'SELECT * FROM fornecedor';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/mudarstatusfornecedor/:id/:status', (req, res) => { 
  const id = req.params.id;
  const status = req.params.status;
  const query = 'UPDATE fornecedor SET c_status_fornecedor = ? WHERE n_fornecedor_fornecedor = ?';

  connection.query(query, [status, id], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao alterar status do fornecedor');
    }
    res.json(results);
  });
});

app.post('/novofornecedor', (req, res) => {
  const { s_desc_fornecedor, s_logo_fornecedor, c_status_fornecedor, listaContatos } = req.body;
  const query1 = `INSERT INTO fornecedor (n_fornecedor_fornecedor, s_desc_fornecedor, s_logo_fornecedor, c_status_fornecedor) VALUES (NULL, ?, ?, ?)`;
  const values = [s_desc_fornecedor, s_logo_fornecedor, c_status_fornecedor];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao inserir dados no servidor');
    }
    
    const fornecedorId = results.insertId;
    if(Array.isArray(listaContatos) && listaContatos.length > 0){
      const contatosValues = listaContatos.map(pessoaId => [null, fornecedorId, pessoaId]);
      const query2 = `INSERT INTO contatofornecedor (n_contatofornecedor_contatofornecedor, n_fornecedor_contatofornecedor, n_pessoa_contatofornecedor) VALUES ?`;

      connection.query(query2, [contatosValues], (error2, results2) => {
        if(error2){
          console.error('Erro ao executar a query:', error2);
          return res.status(500).send('Erro ao inserir contatos');
        }
        res.json(results2);
      });
    }else{
      res.status(200).json({ mensagem: "Novo fornecedor gravado!" });
    }
  });
});

app.get('/dadosfornecedor/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM fornecedor WHERE n_fornecedor_fornecedor = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar fornecedor');
    }
    res.json(results);
  });
});

app.put('/editarfornecedor/:id', (req, res) => {
  const { s_desc_fornecedor, s_logo_fornecedor, c_status_fornecedor, listaContatos } = req.body;
  const id = req.params.id;
  const query1 = `UPDATE fornecedor SET s_desc_fornecedor = ?, s_logo_fornecedor = ?, c_status_fornecedor = ? WHERE n_fornecedor_fornecedor = ?`;
  const values = [s_desc_fornecedor, s_logo_fornecedor, c_status_fornecedor, id];

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }
    
    if(Array.isArray(listaContatos) && listaContatos.length > 0){
      const contatosValues = listaContatos.map(pessoaId => [null, id, pessoaId]);
      const query2 = `INSERT INTO contatofornecedor (n_contatofornecedor_contatofornecedor, n_fornecedor_contatofornecedor, n_pessoa_contatofornecedor) VALUES ?`;

      connection.query(query2, [contatosValues], (error2, results2) => {
        if(error2){
          console.error('Erro ao executar a query:', error2);
          return res.status(500).send('Erro ao inserir novos contatos');
        }
        res.json(results2);
      });
    }else{
      res.status(200).json({ mensagem: "Fornecedor atualizado!" });
    }
  });
});

app.get('/pesquisarfornecedor/:tipo/:valor', (req, res) => { 
  const tipo = req.params.tipo;
  let valor = req.params.valor;
  let query = '';
  if(tipo == 'id'){
    query = 'SELECT * FROM fornecedor WHERE n_fornecedor_fornecedor = ?';    
  }else{
    valor = `%${req.params.valor}%`;
    query = 'SELECT * FROM fornecedor WHERE s_desc_fornecedor LIKE ?';
  }

  connection.query(query, [valor], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar fornecedor');
    }
    res.json(results);
  });
});

app.get('/todaspessoasfornecedores', (req, res) => { 
  const query = "SELECT n_pessoa_pessoa, s_nome_pessoa FROM pessoa WHERE n_tipopessoa_pessoa = 2 AND c_status_pessoa = 'A'";

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/retornartelefones/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM telefone WHERE n_pessoa_telefone = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar telefones');
    }
    res.json(results);
  });
});

app.get('/todoscontatosfornecedor/:id', (req, res) => { 
  const id = req.params.id
  const query = "SELECT cf.n_pessoa_contatofornecedor, p.s_nome_pessoa, cf.n_contatofornecedor_contatofornecedor FROM contatofornecedor cf JOIN pessoa p ON cf.n_pessoa_contatofornecedor = p.n_pessoa_pessoa WHERE cf.n_fornecedor_contatofornecedor = ?";

  connection.query(query, [id], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/deletarcontato/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'DELETE FROM contatofornecedor WHERE n_contatofornecedor_contatofornecedor = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao excluir contato');
    }
    res.json(results);
  });
});

//Estoque - Produtos
app.get('/todosprodutos', (req, res) => { 
  const query = 'SELECT * FROM produto';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.get('/tiposproduto', (req, res) => { 
  const query = 'SELECT * FROM tipoproduto';

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar tipos de produto');
    }
    res.json(results);
  });
});

app.get('/fornecedoresproduto', (req, res) => { 
  const query = "SELECT n_fornecedor_fornecedor, s_desc_fornecedor FROM fornecedor WHERE c_status_fornecedor = 'A'";

  connection.query(query, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar tipos de produto');
    }
    res.json(results);
  });
});

app.post('/novoproduto', (req, res) => {
  const { n_cod_produto, n_tipoproduto_produto, s_desc_produto, n_fornecedor_produto, n_qtde_produto, c_status_produto } = req.body;
  const query = `INSERT INTO produto (n_cod_produto, n_tipoproduto_produto, s_desc_produto, n_fornecedor_produto, n_qtde_produto, c_status_produto) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [n_cod_produto, n_tipoproduto_produto, s_desc_produto, n_fornecedor_produto, n_qtde_produto, c_status_produto];

  connection.query(query, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao inserir dados no servidor');
    }
    res.json(results);
  });
});

app.get('/mudarstatusproduto/:id/:status', (req, res) => { 
  const id = req.params.id;
  const status = req.params.status;
  const query = 'UPDATE produto SET c_status_produto = ? WHERE n_cod_produto = ?';

  connection.query(query, [status, id], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao alterar status do fornecedor');
    }
    res.json(results);
  });
});

app.get('/dadosproduto/:id', (req, res) => { 
  const parametro = req.params.id;
  const query = 'SELECT * FROM produto WHERE n_cod_produto = ?';

  connection.query(query, [parametro], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar produto');
    }
    res.json(results);
  });
});

app.put('/editarproduto/:id', (req, res) => {
  const { n_cod_produto, n_tipoproduto_produto, s_desc_produto, n_fornecedor_produto, n_qtde_produto, c_status_produto } = req.body;
  const id = req.params.id
  const query = `UPDATE produto SET n_cod_produto = ?, n_tipoproduto_produto = ?, s_desc_produto = ?, n_fornecedor_produto = ?, n_qtde_produto = ?, c_status_produto = ? WHERE n_cod_produto = ?`;
  const values = [n_cod_produto, n_tipoproduto_produto, s_desc_produto, n_fornecedor_produto, n_qtde_produto, c_status_produto, id];

  connection.query(query, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }
    res.json(results);
  });
});

app.get('/pesquisarproduto/:tipo/:valor', (req, res) => { 
  const tipo = req.params.tipo;
  let valor = req.params.valor;
  let query = '';
  if(tipo == 'id'){
    query = 'SELECT * FROM produto WHERE n_cod_produto = ?';    
  }else{
    valor = `%${req.params.valor}%`;
    query = 'SELECT * FROM produto WHERE s_desc_produto LIKE ?';
  }

  connection.query(query, [valor], (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao recuperar produto');
    }
    res.json(results);
  });
});

app.put('/editarmovproduto', (req, res) => {
  const { n_qtde_produto, n_cod_produto } = req.body;
  const query = `UPDATE produto SET n_qtde_produto = ? WHERE n_cod_produto = ?`;
  const values = [n_qtde_produto, n_cod_produto];

  connection.query(query, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }
    res.json(results);
  });
});

//Estoque - Login
app.get('/login/:username/:password', (req, res) => { 
  const email = req.params.username;
  const senha = req.params.password;
  let query1 = '';
  let values = [email];

  if(senha != '$empty'){
    query1 = 'SELECT n_pessoa_pessoa, n_primacess_pessoa, s_nome_pessoa FROM pessoa WHERE s_email_pessoa = ? AND s_senha_pessoa = ?';
    values.push(senha);        
  }else{
    query1 = 'SELECT n_pessoa_pessoa, n_primacess_pessoa, s_nome_pessoa FROM pessoa WHERE s_email_pessoa = ?';
  }

  connection.query(query1, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro interno do servidor');
    }
  
    if(results.length == 0 && senha != '$empty'){
      return res.status(208).send('Email ou senha incorretos');
    }
    
    const user = results[0];
    if(senha != '$empty'){
      if(user.n_primacess_pessoa == 0){
        const query2 = 'UPDATE pessoa SET n_primacess_pessoa = 1 WHERE n_pessoa_pessoa = ?';
        const updateValues = [user.n_pessoa_pessoa];

        connection.query(query2, updateValues, (error2, results2) => {
          if(error2){
            console.error('Erro ao executar a query de atualização:', error);
            return res.status(500).send('Erro ao verificar acesso');
          }
          return res.status(205).send('Primeiro acesso do usuário');
        });
      }else{
        return res.status(200).json(user);
      }
    }else{
      return res.status(205).send('Redirecionamento para o cadastro');
    }
  });
});

app.get('/idcadastro/:username', (req, res) => {
  const email = req.params.username;
  const query = `SELECT n_pessoa_pessoa FROM pessoa WHERE s_email_pessoa = ?`;

  connection.query(query, email, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.put('/sign/:id', (req, res) => {
  const { s_email_pessoa, s_senha_pessoa } = req.body;
  const id = req.params.id
  const query = `UPDATE pessoa SET s_email_pessoa = ?, s_senha_pessoa = ? WHERE n_pessoa_pessoa = ?`;
  const values = [s_email_pessoa, s_senha_pessoa, id];

  connection.query(query, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro ao atualizar dados no servidor');
    }
    res.json(results);
  });
});

app.get('/userlogin/:username', (req, res) => {
  const email = req.params.username;
  const query = `SELECT n_pessoa_pessoa, s_nome_pessoa FROM pessoa WHERE s_email_pessoa = ?`;

  connection.query(query, email, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

//Estoque - Token
app.post('/entradatoken', (req, res) => {
  const { n_pessoa_token, s_desc_token, s_validade_token } = req.body;
  const query = `INSERT INTO token (n_token_token, n_pessoa_token, s_desc_token, s_validade_token) VALUES (NULL, ?, ?, ?)`;
  const values = [n_pessoa_token, s_desc_token, s_validade_token]

  connection.query(query, values, (error, results) => {
    if(error){
      console.error('Erro ao executar a query:', error);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

app.post('/saidatoken/:id', (req, res) => {
  const { n_pessoa_token, s_desc_token, s_validade_token } = req.body;
  const query = `INSERT INTO token (n_token_token, n_pessoa_token, s_desc_token, s_validade_token) VALUES (NULL, ?, ?, ?)`;
  const values = [n_pessoa_token, s_desc_token, s_validade_token]

  connection.query(query, values, (error, results) => {
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