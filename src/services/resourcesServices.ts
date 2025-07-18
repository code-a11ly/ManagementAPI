
import fs from 'fs';
import { Resources } from '../models/resourceModel'

import path from 'path';

const FILE_PATH = path.resolve(__dirname, '../data/resources.json');


export function readData(): Resources[] {
  if(!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, '[]');
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data) as Resources[];
}

export function writeData(data: Resources[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
