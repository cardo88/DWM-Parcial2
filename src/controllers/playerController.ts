import { Request, Response } from 'express';
import { Player } from '../models/playerModel';




let lastId: number = 25;

const validPositions = ['GK', 'DF', 'MD', 'FW'];

export const add = (req: Request, res: Response) => {
  const { name, position, suspended, injured } = req.body;

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


export const modify = (req: Request, res: Response) => {
  const { id, position, suspended, injured } = req.body;


  const playerId = parseInt(id, 10);
  if (isNaN(playerId)) {
    return res.status(400).json({ message: 'ID de player no válido.' });
  }

  const foundPlayer = player.find(p => p.id === playerId.toString());

  if (!foundPlayer) {
    return res.status(404).json({ message: 'player no encontrada.' });
  }

  // Validar que los campos requeridos estén presentes
  if (!position || suspended === undefined || injured === undefined) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios!' });
  }

  if (!validPositions.includes(position)) {
    return res.status(400).json({ success: false, message: 'Posición no válida' });
  }

  const playerIndex = player.findIndex((playerItem) => playerItem.id === id);
  if (playerIndex >= 0) {
    player[playerIndex] = {
      id: player[playerIndex].id,
      name: player[playerIndex].name,
      position: req.body.position,
      suspended: req.body.suspended,
      injured: req.body.injured,
    };
    return res.status(200).json({ success: true, player : player[playerIndex] });
  }

  res.status(404).json({ message: "Could not find Player for this id." });
};



// Guardar en memoria
const player: Player[] = [
  {
    "id": "0",
    "name": "Player 0",
    "position": "DF",
    "suspended": false,
    "injured": false
  },
  {
    "id": "1",
    "name": "Player 1",
    "position": "DF",
    "suspended": false,
    "injured": false
  },
  {
    "id": "2",
    "name": "Player 2",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "3",
    "name": "Player 3",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "4",
    "name": "Player 4",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "5",
    "name": "Player 5",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "6",
    "name": "Player 6",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "7",
    "name": "Player 7",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "8",
    "name": "Player 8",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "9",
    "name": "Player 9",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "10",
    "name": "Player 10",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "11",
    "name": "Player 11",
    "position": "FW",
    "suspended": false,
    "injured": false
  },
  {
    "id": "12",
    "name": "Player 12",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "13",
    "name": "Player 13",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "14",
    "name": "Player 14",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "15",
    "name": "Player 15",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "16",
    "name": "Player 16",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "17",
    "name": "Player 17",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "18",
    "name": "Player 18",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "19",
    "name": "Player 19",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "20",
    "name": "Player 20",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "21",
    "name": "Player 21 🥅",
    "position": "GK",
    "suspended": false,
    "injured": false
  },
  {
    "id": "22",
    "name": "Player 22 ❌ 🥅",
    "position": "MD",
    "suspended": false,
    "injured": false
  },
  {
    "id": "23",
    "name": "Player 23 🩼🤕🩼",
    "position": "GK",
    "suspended": false,
    "injured": true
  },
  {
    "id": "24",
    "name": "Player 🤬 🟥",
    "position": "GK",
    "suspended": true,
    "injured": false
  }
]