CREATE SCHEMA IF NOT EXISTS `loja_doces` DEFAULT CHARACTER SET utf8 ;
USE `loja_doces` ;

create table categorias(
	id_categoria int auto_increment primary key,
    nome_categoria varchar(45)
);
create table doces(
	id_doce int auto_increment primary key,
    nome_doce varchar(45),
    id_categoria int,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);
INSERT INTO categorias VALUES(
	null,
    'Bolos'
);
INSERT INTO doces VALUES(
	null,
    'Chocolate',
    1
);