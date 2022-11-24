export const createProductTable = () => {
  return `create table if not exists product (
    id integer primary key autoincrement , 
    name text NOT NULL, 
    price integer NOT NULl, 
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

export const findProductByName = (name) => {
  return `select * from product where name = ${name}`;
};

export const insertProduct = (name, price, image, type) => {
  return `insert into product(name, price, image, type) 
  values ( '${name}', '${price}', '${image}', '${type}' )`;
};

export const updateProduct = (id, name, price, image, type) => {
  return `update product set name = '${name}', price = '${price}', image = '${image}', type = '${type}' where id = ${id}`;
};

export const deleteProductById = (id) => {
  return `delete from product where id = ${id}`;
};

export const deleteAllProduct = (id) => {
  return `delete from product`;
};
