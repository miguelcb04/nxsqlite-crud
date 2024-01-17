const sqlite3 = require("sqlite3").verbose();

const createTable = `CREATE TABLE IF NOT EXISTS proveedores (
    id          INTEGER PRIMARY KEY,
    nombre      TEXT NOT NULL,
    telefono    INTEGER(9)
);`

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./db.sqlite",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => { if (err) return console.error(err.message); console.log("Connected to the SQlite database."); }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items of table if it doesn't exist
  db.run(createTable,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created items table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM proveedores`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from items");

        // Insert new data into the products table
        const values1 = [ "Manuel", 989878777  ];
        const values2 = [ "Ana", 777888999  ];

        const insertSql = `INSERT INTO proveedores(nombre, telefono) VALUES(?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });
          
        //   Close the database connection after all insertions are done
        db.close((err) => { if (err) { return console.error(err.message); }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});