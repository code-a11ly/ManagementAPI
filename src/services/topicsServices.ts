
import fs from 'fs';
import path from 'path';
import { Topics } from '../models/topicModel'


const FILE_PATH = path.resolve(__dirname, '../data/topics.json');


export function readData(): Topics[] {
  if(!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    return [];
  }

  const data = fs.readFileSync(FILE_PATH, 'utf-8');

  if (!data.trim()) {
    fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    return [];
  }


  return JSON.parse(data) as Topics[];
}

export function writeData(data: Topics[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
