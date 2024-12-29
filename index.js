const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const o = require("./services/io.js").o
const i = require("./services/io.js").i

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Desarrollo Posicional",
    version: "1.0.0",
    description: "Personal development",
    contact: {
      name: "For inquiries, WhatsApp me",
      url: "https://api.whatsapp.com/send?phone=+54%209%2011%202401%200760&text=Hola%20JP!%20Vengo%20de%20inmobiler%20docs%20y%20queria%20consultarte%20lo%20siguiente:",
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["index.js"],
};

const swaggerConfig = swaggerJSDoc(options);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// Swagger documentation
app.use("/start", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// CORS configuration
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const router = express.Router();

router.get("/projects", async (req, res) => {
  console.log("Fetching projects...");

  const projects = o('./proyectos_gtd/')

  res.send(projects);
    
});

router.get("/ln", async (req, res) => {
  console.log("Listing all learning necesities...");

  const learning_necesities = o('./learning/necesity/')

  res.send(learning_necesities);
    
});

/**
 * @swagger
 * /ln:
 *   post:
 *     summary: Create a new learning necessity
 *     description: Accepts a learning necessity and additional context, then saves it.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to_learn:
 *                 type: string
 *                 description: The item to learn
 *                 example: "JavaScript"
 *               about:
 *                 type: string
 *                 description: Additional context about the learning necessity
 *                 example: "Programming languages"
 *     responses:
 *       200:
 *         description: Learning necessity created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: The learning necessity created
 */
router.post("/ln", async (req, res) => {
  console.log("creating a new learning necesity...");
  const ln = req.body.to_learn
  const about = req.body.about

  const learning_necesities = i('./learning/necesity/',ln,about)

  res.send(learning_necesities);
    
});



app.use(router);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
