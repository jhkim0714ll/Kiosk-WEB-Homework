export const createSpendTable = () => {
  console.log("🔀 spend   DB Created!");
  return `create table if not exists spend (
    id integer primary key autoincrement, 
    fk_product_id integer NOT NULl,
    amount integer NOT NULL
  )`;
};

export const findAllSpend = () => {
  return "select * from spend";
};

export const findSpendById = (id) => {
  return `select * from spend where id ='${id}'`;
};
