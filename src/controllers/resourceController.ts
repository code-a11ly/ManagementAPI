
import { Request, Response } from 'express';
import { readData, writeData } from '../services/resourcesServices';
import { Resources } from '../models/resourceModel';

// GET all resources
export function getAllResources(req: Request, res: Response) {
  const resources = readData();
  res.json(resources);
};

// POST new resources
export function addResources(req: Request, res: Response) {
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
