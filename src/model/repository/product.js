export const createProductTable = () => {
  return `create table if not exists product (
    id integer primary key autoincrement , 
    name text NOT NULL, 
    money integer NOT NULl, 
    image text NOT NULL, 
    type text NOT NULL
  )`;
};

export const findAllProduct = () => {
  return `select * from product`;
};

export const findOneProduct = (id) => {
  return `select * from product where id = ${id}`;
};

export const insertProduct = (name, money, image, type) => {
  return `insert into product(name, money, image, type) 
  values ( '${name}', '${money}', '${image}', '${type}' )`;
};

export const updateProduct = (id, name, money, image, type) => {
  return `update product set name = '${name}', money = '${money}', image = '${image}', type = '${type}' where id = ${id}`;
};

export const deleteProductById = (id) => {
  return `delete from product where id = ${id}`;
};

export const deleteAllProduct = (id) => {
  return `delete from product`;
};
