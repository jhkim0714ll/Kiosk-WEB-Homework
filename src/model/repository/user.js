export const createUserTable = () => {
  console.log("🔀 User    DB Created!");
  return `create table if not exists user (
    id text primary key, 
    password text NOT NULl
  )`;
};

export const getUserByIdAndPassword = (id, password) => {
  return `select * from user where id = '${id}' and password = '${password}'`;
};

export const getUserById = (id) => {
  return `select * from user where id ='${id}'`;
};

export const createUser = (id, paasword) => {
  return `insert into user(id, password) values( '${userId}', '${password}'}' )`;
};
