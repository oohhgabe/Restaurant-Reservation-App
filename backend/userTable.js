import reservationDB from "./configDB.js";

class userTable extends reservationDB {
  constructor() {
    // Calls parent constructor first
    super();
    const dropsql = `DROP TABLE IF EXISTS user`;
    this.run(dropsql);
    const sql = `CREATE TABLE IF NOT EXISTS user(
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      email varchar(255) not null, 
      password varchar(255) not null, 
      first varchar(45) not null, 
      last varchar(45) not null, 
      phone varchar(45) not null,
      mailing varchar(255) not null,
      billing varchar(255) not null, 
      UNIQUE(email))`;
    this.run(sql);
  }

  createUser(email, password, first, last, phone, mailing, billing) {
    return this.run(
      "INSERT OR IGNORE INTO user (email, password, first, last, phone, mailing, billing)\n" +
        "VALUES (?, ?, ?, ?, ?, ?, ?)",
      [email, password, first, last, phone, mailing, billing]
    );
  }

  getByEmail(email) {
    return this.get(`SELECT * FROM user WHERE email = ?`, [email]);
  }
}

export default userTable;
