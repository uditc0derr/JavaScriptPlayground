const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const compilerRoutes = require("./routes/compilerRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/compiler", compilerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
