

import { Resources } from '../models/resourceModel';
import resources from '../data/resource';

let resourcesList: Resources[] = resources;

export function getAll(): Resources[] {
  return resourcesList;
}

export function getById(id: number): Product | undefined {
  return productList.find(p => p.id === id);
}

export function create(name: string, price: number): Product {
  const newProduct: Product = { id: Date.now(), name, price };
  productList.push(newProduct);
  return newProduct;
}

export function update(id: number, name: string, price: number): Product | null {
  const index = productList.findIndex(p => p.id === id);
  if (index === -1) return null;
  productList[index] = { id, name, price };
  return productList[index];
}

export function remove(id: number): boolean {
  const initialLength = productList.length;
  productList = productList.filter(p => p.id !== id);
  return productList.length < initialLength;
}
