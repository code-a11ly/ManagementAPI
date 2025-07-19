
import fs from 'fs';
import path from 'path';
import { Users } from '../models/userModel'


const FILE_PATH = path.resolve(__dirname, '../data/users.json');


export function readData(): Users[] {
  if(!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, '[]');
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data) as Resources[];
}

export function writeData(data: Users[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
