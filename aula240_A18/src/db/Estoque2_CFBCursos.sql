CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `n_fornecedor_pessoa` int,
  `n_tipopessoa_pessoa` int,
  `s_nome_pessoa` varchar(255),
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

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_fornecedor_pessoa`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_tipopessoa_pessoa`) REFERENCES `tipopessoa` (`n_tipopessoa_tipopessoa`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_pessoa_telefone`) REFERENCES `pessoa` (`n_pessoa_pessoa`);
