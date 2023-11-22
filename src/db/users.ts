import { User } from "../models/userModel";

const users: User[] = [
  { id: 1, username: "lunes", password: "123" },
  { id: 2, username: "martes", password: "987" },
];

export const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};
