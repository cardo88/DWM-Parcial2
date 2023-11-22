import express from 'express';
import * as playerontroller from '../controllers/playerController';
import authenticateJWT from '../middlewares/authenticateJWT';

const router = express.Router();

// Rutas para player
// router.get('/search', authenticateJWT, playerontroller.search);
router.post('/', authenticateJWT, playerontroller.add);
router.delete('/:id', authenticateJWT, playerontroller.remove);
router.get('/', authenticateJWT, playerontroller.getAll);
router.get('/:id', authenticateJWT, playerontroller.getById);
router.put('/:id', authenticateJWT, playerontroller.modify);


export default router;
