import express from "express";
import { executeMock } from "../services/loanShot.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { pair, buyPrice, sellPrice, profit } = req.body;
        console.log("🎯 Trigger received:", pair);

        const txResult = await executeMock(pair, profit);
        res.json({ status: "fired", result: txResult });
    } catch (err) {
        console.error("❌ Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

export default router;
