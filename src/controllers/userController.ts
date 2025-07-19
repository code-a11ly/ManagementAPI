

import { readData, writeData } from './services/usersServices';
import { Users } from './models/userModel';

// GET all items
export function getAllUsers(req, res) {
  const users = readData();
  res.json(users);
};

// POST new item
export function addUsers(req, res) {
  const resources = readData();
  const newResource: Resources = {
    id: resources.length > 0 ? resources[resources.length - 1].id + 1 : 1,
    topic: req.body.topic,
    url: req.body.url,
    description: req.body.description,
    type: req.body.type,
    updatedAt: req.body.updatedAt,
    createdAt: req.body.createdAt
  };
  resources.push(newResource);
  writeData(resources);
  res.status(201).json(newResource);
};
