import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();

function getConnection() {
  const db = new sqlite.Database("./test.db", (err) => {
    if (err) {
      console.log(`❌ ${err.message}`);
    }
  });
  return db;
}

export const executeSql = (sql) => {
  const db = getConnection();
  db.serialize();
  db.each(sql);
  db.close();
};

export const executeSelect = (sql) => {
  return new Promise((resolve, reject) => {
    const db = getConnection();
    db.serialize();
    db.all(sql, (err, rows) => {
      db.close();
      if (err) reject(err);
      else resolve(rows);
    });
  });
};
