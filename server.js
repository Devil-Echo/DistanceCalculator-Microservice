const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3005;

const routes = require("./api/routes");
routes(app);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
