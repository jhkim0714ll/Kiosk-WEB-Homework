export const createProductTable = () => {
  console.log("🔀 Product DB Created!");
  return `create table if not exists product (
    id integer primary key, 
    money integer NOT NULl, 
    image text NOT NULL, 
    name text NOT NULL, 
    type text NOT NULL
  )`;
};
