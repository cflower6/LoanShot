import express from "express";
import dotenv from "dotenv";
import triggerRoutes from "./routes/trigger.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/trigger", triggerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 LoanShot API listening on port ${PORT}`));
