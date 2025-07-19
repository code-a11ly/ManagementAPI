
import fs from 'fs';
import path from 'path';
import { Resources } from '../models/resourceModel'


const FILE_PATH = path.resolve(__dirname, '../data/resources.json');


export function readData(): Resources[] {
  if(!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    return [];
  }

  const data = fs.readFileSync(FILE_PATH, 'utf-8');

  if (!data.trim()) {
    fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    return [];
  }


  return JSON.parse(data) as Resources[];
}

export function writeData(data: Resources[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}
