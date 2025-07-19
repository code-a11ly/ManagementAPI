import { Request, Response, NextFunction } from 'express';

export function validateResources(req: Request, res: Response, next: NextFunction) {
  const { id, topic, url, description, type, updatedAt, createdAt } = req.body;
  if (typeof id !== 'number'
   || typeof topic !== 'string'
   || typeof url !== 'string'
   || typeof description !== 'string'
   || typeof updatedAt !== 'string'
   || typeof createdAt !== 'string'
  ) {
    return res.status(400).json({ message: 'Invalid product format' });
  }
  next();
}

export function validateTopics(req: Request, res: Response, next: NextFunction) {
  const { id, name, content, createdAt, updatedAt, version, parentTopicId } = req.body;
  if (typeof id !== 'number'
   || typeof name !== 'string'
   || typeof content !== 'string'
   || typeof createdAt !== 'string'
   || typeof updatedAt !== 'string'
   || typeof version !== 'number'
   || typeof parentTopicId !== 'number'
  ) {
    return res.status(400).json({ message: 'Invalid product format' });
  }
  next();
}


export function validateUsers(req: Request, res: Response, next: NextFunction) {
  const { id, name, email, role, createdAt } = req.body;
  if (typeof id !== 'number'
   || typeof name !== 'string'
   || typeof name !== 'string'
   || typeof role !== 'string'
   || typeof createdAt !== 'string'
  ) {
    return res.status(400).json({ message: 'Invalid product format' });
  }
  next();
}
