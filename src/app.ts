import express from 'express';
import { readData, writeData } from './services/resourcesServices';
import { Resources } from './models/resourceModel';

const app = express();
app.use(express.json());

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
  resources.push(newItem);
  writeData(resources);
  res.status(201).json(newResource);
});

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
