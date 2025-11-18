import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { OAuth2Client } from "google-auth-library";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "containers-us-west-123.railway.app",
  port: 3306,
  user: "root",
  password: "AfPcvPWHYxmwqGaiqMAWsQkFAAQQPhvN",
  database: "railway"
});

console.log(db);

const client = new OAuth2Client("24288542269-6pqqvu7pc5s9ugtqpjfmul6d5tm6kj8a.apps.googleusercontent.com");

// === Existing username/password login ===
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      res.json({
        success: true,
        fullname: rows[0].fullname,
        message: "Login successful",
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// === Google login route ===
app.post("/google-login", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "24288542269-6pqqvu7pc5s9ugtqpjfmul6d5tm6kj8a.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ success: false, message: "Invalid token" });
    }

    const { email, name, sub } = payload;

    const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      await db.query(
        "INSERT INTO users (fullname, email, google_id) VALUES (?, ?, ?)",
        [name, email, sub]
      );
    }

    res.json({
      success: true,
      fullname: name,
      email,
      message: "Google login successful",
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get List of departments
app.get("/departments", async (_req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM departments");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/departments", async (req, res) => { //Create departments
  const { abbreviation, name, description, status } = req.body;
  try {
    await db.query(
      "INSERT INTO departments (abbreviation, name, description, status) VALUES (?, ?, ?, ?)",
      [abbreviation, name, description, status]
    );
    res.json({ success: true, message: "Department added successfully" });
  } catch (error) {
    console.error("Error adding department:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.listen(4000, () => console.log("Server running on http://localhost:4000"));





















// import express from "express";
// import cors from "cors";
// import mysql from "mysql2/promise";
// import { OAuth2Client } from "google-auth-library";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "typescript2",
// });

// const client = new OAuth2Client("550501518917-htm8ija7iddhl3sbnb2aej9450bo3s0a.apps.googleusercontent.com");

// // === Existing username/password login ===
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const [rows]: any = await db.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, password]
//     );

//     if (rows.length > 0) {
//       res.json({
//         success: true,
//         fullname: rows[0].fullname,
//         message: "Login successful",
//       });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // === Google login route ===
// app.post("/google-login", async (req, res) => {
//   const { token } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: "550501518917-htm8ija7iddhl3sbnb2aej9450bo3s0a.apps.googleusercontent.com",
//     });

//     const payload = ticket.getPayload();
//     if (!payload) {
//       return res.status(400).json({ success: false, message: "Invalid token" });
//     }

//     const { email, name, sub } = payload;

//     const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (rows.length === 0) {
//       await db.query(
//         "INSERT INTO users (fullname, email, google_id) VALUES (?, ?, ?)",
//         [name, email, sub]
//       );
//     }

//     res.json({
//       success: true,
//       fullname: name,
//       email,
//       message: "Google login successful",
//     });
//   } catch (error) {
//     console.error("Google login error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// app.listen(4000, () => console.log("Server running on http://localhost:4000"));












// import express from "express";
// import cors from "cors";
// import mysql from "mysql2/promise";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createPool({
//   host: "localhost",      // your MySQL host
//   user: "root",           // your MySQL username
//   password: "",           // your MySQL password
//   database: "typescript2",    // your database name
// });

// db.getConnection()
//   .then(() => console.log("Connected to MySQL database"))
//   .catch((err) => console.error("Database connection failed:", err));

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const [rows]: any = await db.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, password]
//     );

//     if (rows.length > 0) {
//       res.json({ success: true, message: "Login successful" });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// app.listen(4000, () => console.log("Server running on http://localhost:4000"));








// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const users = [
//   { username: "admin", password: "1234" },
//   { username: "guest", password: "guest" },
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ success: true, message: "Login successful" });
//   } else {
//     res.json({ success: false, message: "Invalid credentials" });
//   }
// });
// app.listen(4000, () => console.log("Server running on http://localhost:4000"));