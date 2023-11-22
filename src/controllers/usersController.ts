import { User } from "../models/userModel";

const users: User[] = [
  { id: 1, username: "lunes", password: "123" },
  { id: 2, username: "martes", password: "987" },
];

export const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

export const createUser = (username: string, password: string): User => {
  const newUser: User = {
    id: users.length + 1,
    username,
    password,
  };

  users.push(newUser);
  return newUser;
};
