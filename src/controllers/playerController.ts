import { Request, Response } from 'express';
import { Player } from '../models/playerModel';

// Guardar en memoria
const player: Player[] = [];
let lastId: number = 0;

const validPositions = ['GK', 'DF', 'MD', 'FW'];

export const add = (req: Request, res: Response) => {
  const { name, position, suspended, injured} = req.body;

  // Validar que los campos requeridos estén presentes
  if (!name || !position || suspended === undefined || injured === undefined) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios!' });
  }

  if (!validPositions.includes(position)) {
    return res.status(400).json({ success: false, message: 'Posición no válida' });
  }

  lastId++;
  // Crear una nueva player
  const newPlayer: Player = {
    id: lastId.toString(),
    name,
    position,
    suspended,
    injured,
  };

  // Agregar la nueva player al array
  player.push(newPlayer);

  res.status(201).json({ success: true, newPlayer });
};




export const remove = (req: Request, res: Response) => {
  const { id } = req.params;

  // Encuentra la player en el array por su ID
  const index = player.findIndex(player => player.id === id);

  if (index !== -1) {
    // Si la player existe, la elimina del array
    const deletedPlayer = player.splice(index, 1)[0];
    res.json({ success: true, deletedPlayer });
  } else {
    res.status(404).json({ success: false, message: 'player no encontrada' });
  }
};


// export const search = (req: Request, res: Response) => {
//   const { firstName, lastName } = req.query;
//   const results = player.filter(player => {
//     const matchFirstName = (player.name as string || '').toLowerCase().includes((firstName as string || '').toLowerCase());
//     const matchLastName = (player.apellido as string || '').toLowerCase().includes((lastName as string || '').toLowerCase());
//     return matchFirstName && matchLastName;
//   });
//   res.json({ results });
// };



export const getAll = (req: Request, res: Response) => {
  res.json({ success: true, player });
};




export const getById = (req: Request, res: Response) => {
  const { id } = req.params;

  const playerId = parseInt(id, 10);
  if (isNaN(playerId)) {
    return res.status(400).json({ message: 'ID de player no válido.' });
  }

  const foundPlayer = player.find(p => p.id === playerId.toString());

  if (!foundPlayer) {
    return res.status(404).json({ message: 'player no encontrada.' });
  }

  res.json({ player: foundPlayer });
};


// export const companyHasPeople = (companyId: number): boolean => {
//   // Verificar si hay players asociadas a la compañía
//   return player.some(player => player.empresa === companyId);
// };