
import { Request, Response } from 'express';
import { readData, writeData } from '../services/topicsServices';
import { Topics } from '../models/topicModel';

// GET all items
export function getAllTopics(req: Request, res: Response) {
  const topics = readData();
  res.json(topics);
};

// POST new item
export function addTopics(req: Request, res: Response) {
  const topics = readData();
  const newTopic: Topics = {
    id: topics.length > 0 ? topics[topics.length - 1].id + 1 : 1,
    name: req.body.name,
    content: req.body.content,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    version: req.body.version,
    parentTopicId: req.body.parentTopicId,
  };
  topics.push(newTopic);
  writeData(topics);
  res.status(201).json(newTopic);
};
