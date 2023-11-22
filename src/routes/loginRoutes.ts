import express from "express";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByUsername } from "../db/users";
import { createUser } from "../db/users";

const router = express.Router();

router.post("/login", (req, res) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) {
    return res
      .status(401)
      .json({ message: "Authentication failed, invalid user" });
  }
  if (secretKey) {
    if (password === user.password) {
      const token = jwt.sign({ username: user.username }, secretKey, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token });
    }
  }

  return res
    .status(401)
    .json({
      message: "Authentication failed, user and password must match...",
    });
});


router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  // Crear usuario
  const newUser = createUser(username, password);

  return res.status(201).json({ message: "Usuario creado con éxito", newUser });
});

export default router;


