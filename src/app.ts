import express from 'express';

import { readData, writeData } from './services/resourcesServices';
import { Resources } from './models/resourceModel';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});

// GET all items
app.get('/resources', (req, res) => {
  const resources = readData();
  res.json(resources);
});

// POST new item
app.post('/resources', (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
