import express from 'express';
import bodyParser from 'body-parser';
import peopleRoutes from './routes/playerRoutes';
import authenticateJWT from './middlewares/authenticateJWT';
import loginRouter from './routes/loginRoutes';
import protectedRouter from './routes/protectedRoutes';
import signupRouter from './routes/loginRoutes';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Rutas para autenticación
app.use("/api", loginRouter);
app.use("/api", protectedRouter);

// Ruta para signip
app.use("/api", signupRouter);

// Rutas para player
app.use('/players', peopleRoutes);


// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: 
    ' Bienvenido al Backend de este webapp! Disponibles /api, /people y /companies' });
});

app.listen(PORT, () => {
  console.log(`Info msg: app.js >> back server url: http://localhost:${PORT}`);
});
