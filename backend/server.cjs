const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.cjs");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Routes
app.use("/api/users", require("./routes/userRoutes.cjs"));
app.use("/api/sessions", require("./routes/sessionRoutes.cjs"));
app.use("/api/monitoring", require("./routes/monitoringRoutes.cjs")); // New Monitoring Route
app.use("/api/admin", require("./routes/adminRoutes.cjs"));
// app.use("/api/alerts", require("./routes/alertRoutes.cjs")); // Deprecated or kept for legacy if needed

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
