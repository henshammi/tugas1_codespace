const express = require("express");
const itemRoute = require("./route/itemRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", itemRoute);

// Error Handler Middleware
app.use(errorHandler);

// Start Server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
