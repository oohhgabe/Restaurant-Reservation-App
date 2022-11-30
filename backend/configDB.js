import mysql from "mysql";

let database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  multipleStatements: true,
});

database.connect((err) => {
  if (err) {
    console.log("Database connection failed!", err);
  } else {
    console.log("Successfully connected to Database!");
  }
});

// Create Database
const createDatabase = () => {
  return new Promise((resolve, reject) => {
    let createQuery = `CREATE DATABASE IF NOT EXISTS reservation`;
    database.query(createQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log("Database Created Successfully!");
      return resolve(results);
    });
  });
};

// Create User Table
const createUserTable = () => {
  return new Promise((resolve, reject) => {
    let createUserTableQuery =
      `DROP TABLE IF EXISTS reservation.user;\n` +
      `CREATE TABLE IF NOT EXISTS reservation.user (
      id INT NOT NULL AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      first VARCHAR(45) NOT NULL,
      last VARCHAR(45) NOT NULL,
      phone VARCHAR(45) NOT NULL,
      mailing VARCHAR(255) NOT NULL,
      billing VARCHAR(255) NOT NULL,
      PRIMARY KEY (id),
      UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);`;

    database.query(createUserTableQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log("UserTable Created Successfully!");
      return resolve(results);
    });
  });
};

//Create addUser Procedure for future use
const addUserProcedure = () => {
  return new Promise((resolve, reject) => {
    let addUserQuery =
      `DROP PROCEDURE IF EXISTS reservation.addUser;\n` +
      `CREATE PROCEDURE reservation.addUser(IN i_email VARCHAR(255), IN i_password VARCHAR(255), IN i_first VARCHAR(45), IN i_last VARCHAR(45), IN i_phone VARCHAR(45), IN i_mailing VARCHAR(45), IN i_billing VARCHAR(45))\n` +
      `BEGIN\n` +
      `INSERT INTO reservation.user(email, password, first, last, phone, mailing, billing)\n` +
      `VALUES(i_email, i_password, i_first, i_last, i_phone, i_mailing, i_billing);\n` +
      `END`;

    database.query(addUserQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log("addUser Procedure Created Successfully!");
      return resolve(results);
    });
  });
};

const promise1 = createDatabase();
const promise2 = createUserTable();
const promise3 = addUserProcedure();
const promises = [promise1, promise2, promise3];

try {
  const result = await Promise.all(promises);

  // you can do something with the result
} catch (error) {
  console.log(error);
}
// THIS IS HOW YOU CALL PROCEDURE
/*
let addUser = database.query(
  "CALL reservation.addUser(?, ?, ?, ?, ?, ?, ?)",
  [
    "test@email.com",
    "testing123",
    "test",
    "123",
    "1234567890",
    "112 random st",
    "112 random st",
  ],
  function (err, result) {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Results: ", result);
    }
  }
); */

export default database;
