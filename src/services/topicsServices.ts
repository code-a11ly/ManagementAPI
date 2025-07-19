
import fs from 'fs';
import path from 'path';
import { Topics } from '../models/topicModel'


const FILE_PATH = path.resolve(__dirname, '../data/topics.json');


export function readData(): Topics[] {
  if(!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, '[]');
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data) as Resources[];
}

export function writeData(data: Topics[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
