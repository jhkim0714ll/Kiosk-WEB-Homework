export const createSpendTable = () => {
  console.log("🔀 spend   DB Created!");
  return `create table if not exists spend (
    id integer primary key, 
    fk_product_id integer NOT NULl,
    amount integer NOT NULL
  )`;
};

export const getAllSpend = () => {
  return "select * from spend";
};

export const getSpendById = (id) => {
  return `select * from spend where id ='${id}'`;
};
