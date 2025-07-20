
import { Request, Response } from 'express';
import { readData, writeData } from '../services/resourcesServices';
import { Resources } from '../models/resourceModel';

// GET all resources
export function getAllResources(req: Request, res: Response) {
  const resources = readData();
  res.json(resources);
};

// POST new resources
export function createResources(req: Request, res: Response) {
  const resources = readData();
  const newResource: Resources = {
    id: resources.length > 0 ? resources[resources.length - 1].id + 1 : 1,
    topic: req.body.topic,
    url: req.body.url,
    description: req.body.description,
    type: req.body.type,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  resources.push(newResource);
  writeData(resources);
  res.status(201).json(newResource);
};


// POST new resources
export function updateResources(req: Request, res: Response) {
  const { id } = req.params;
  const resources = readData();
  const newResource: Resources = {
    id: Number(id),
    topic: req.body.topic,
    url: req.body.url,
    description: req.body.description,
    type: req.body.type,
    updatedAt: new Date().toISOString(),
    createdAt: req.body.createdAt
  };
  resources.push(newResource);
  writeData(resources);
  res.status(201).json(newResource);
};
