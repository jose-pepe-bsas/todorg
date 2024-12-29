const express = require("express");
//const swaggerJSDoc = require("swagger-jsdoc");
//const swaggerUi = require("swagger-ui-express");
//const multer = require("multer");
const cors = require("cors");
//const dotenv = require("dotenv");
//import { swaggerConfig } from "./src/config/swagger.js";
//import { sqlite_db } from "./src/tech_utilities/database_builder.js";

//dotenv.config({ path: "./.devel.env" });

//const app_cf = process.env;

//const storage = await sqlite_db("dev", null, app_cf);

//const upload = multer({ dest: app_cf.DOCUMENTS_DESTINATION });

const app = express();
//app.use(app_cf.DOC_URL, swaggerUi.serve, swaggerUi.setup(swaggerConfig));
// CORS
app.use(
  cors({
//    origin: app_cf.DEV_DOMAIN + ":" + app_cf.DEV_PORT,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);


app.get("/", function (req, res) {
  res.send("right");
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
