CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `n_fornecedor_pessoa` int,
  `n_tipopessoa_pessoa` int,
  `s_nome_pessoa` varchar(255),
  `s_email_pessoa` varchar(255),
  `s_senha_pessoa` varchar(255),
  `n_primacess_pessoa` int,
  `s_foto_pessoa` mediumtext NOT NULL,
  `c_status_pessoa` char(1)
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `n_pessoa_telefone` int,
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipopessoa` (
  `n_tipopessoa_tipopessoa` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `s_desc_tipopessoa` varchar(255),
  `n_nivel_tipopessoa` int
);

CREATE TABLE `fornecedor` (
  `n_fornecedor_fornecedor` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `s_desc_fornecedor` varchar(255),
  `s_logo_fornecedor` mediumtext,
  `c_status_fornecedor` char(1)
);

CREATE TABLE `contatofornecedor` (
  `n_contatofornecedor_contatofornecedor` int PRIMARY KEY AUTO_INCREMENT NOT NULL, 
  `n_fornecedor_contatofornecedor` int,
  `n_pessoa_contatofornecedor` int 
);

CREATE TABLE `produto` (
  `n_cod_produto` int PRIMARY KEY NOT NULL,
  `n_tipoproduto_produto` int,
  `s_desc_produto` varchar(255),
  `n_fornecedor_produto` int,
  `n_qtde_produto` int,
  `c_status_produto` char(1)
);

CREATE TABLE `tipoproduto` (
  `n_tipoproduto_tipoproduto` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `s_desc_tipoproduto` varchar(255)  
);

CREATE TABLE `movimentacao` (
  `n_movimentacao_movimentacao` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `n_pessoa_movimentacao` int,
  `c_tipo_movimentacao` char,
  `n_qtde_movimentacao` int,
  `dt_datahora_movimentacao` datetime
);

CREATE TABLE `token` (
  `n_token_token` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_token` int,
  `s_desc_token` varchar(255),
  `s_validade_token` varchar(255)
);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_fornecedor_pessoa`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_tipopessoa_pessoa`) REFERENCES `tipopessoa` (`n_tipopessoa_tipopessoa`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_pessoa_telefone`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `contatofornecedor` ADD FOREIGN KEY (`n_fornecedor_contatofornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `contatofornecedor` ADD FOREIGN KEY (`n_pessoa_contatofornecedor`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_tipoproduto_produto`) REFERENCES `tipoproduto` (`n_tipoproduto_tipoproduto`);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_fornecedor_produto`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `movimentacao` ADD FOREIGN KEY (`n_pessoa_movimentacao`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `token` ADD FOREIGN KEY (`n_pessoa_token`) REFERENCES `pessoa` (`n_pessoa_pessoa`);