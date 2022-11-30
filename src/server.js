const express = require("express");
const { createServer } = require("http");
const app = express();
const httpServer = createServer(app);

const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/index");
const connectDB = require("./config/db");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};

// routes imports
const createUser = require("./app/routes/users/createUser");
const login = require("./app/routes/users/login");
const createNote = require("./app/routes/notes/createNote");
const deleteNote = require("./app/routes/notes/deleteNote");
const getNotes = require("./app/routes/notes/getNotes");
const updateNote = require("./app/routes/notes/updateNote");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// end points
app.use("/users", createUser);
app.use("/users", login);
app.use("/notes", createNote);
app.use("/notes", deleteNote);
app.use("/notes", getNotes);
app.use("/notes", updateNote);

app.get("/", (req, res) => {
  res.json({
    message: "Hello Welcome to notes api! written by ilyaseen19(Abdallah)",
  });
});

// mongoose database connection
connectDB();

// port for connection
const PORT = config.server.port;

// starting the server
httpServer.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
