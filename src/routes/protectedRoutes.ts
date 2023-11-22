// src/routes/protected.ts
import express from "express";
import authMiddleware from "../middlewares/authenticateJWT";

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access to this protected route!" });
});

export default router;
