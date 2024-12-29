
const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//const multer = require("multer");
const cors = require("cors");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Desarrollo posicional",
    version: "1.0.0",
    description:
      "      Personal development",
    contact: {
      name: "for inquires, whatsapp me",
      url: "https://api.whatsapp.com/send?phone=+54%209%2011%202401%200760&text=Hola%20JP!%20Vengo%20de%20inmobiler%20docs%20y%20queria%20consultarte%20lo%20siguiente:",
    },
  },

};

const options = {
  swaggerDefinition,
  apis: ["index.js"],
};

//import { swaggerConfig } from "./src/config/swagger.js";
const swaggerConfig = swaggerJSDoc(options);

const app = express();
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
// CORS
app.use(
  cors({
//    origin: app_cf.DEV_DOMAIN + ":" + app_cf.DEV_PORT,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);


app.listen(3000, () => {
  console.log("Running on 3000");
});
