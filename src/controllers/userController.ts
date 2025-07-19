
import { Request, Response } from 'express';
import { readData, writeData } from '../services/usersServices';
import { Users } from '../models/userModel';

// GET all items
export function getAllUsers(req: Request, res: Response) {
  const users = readData();
  res.json(users);
};

// POST new item
export function addUsers(req: Request, res: Response) {
  const users = readData();
  const newUser: Users = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    createdAt: req.body.createdAt
  };
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
};
