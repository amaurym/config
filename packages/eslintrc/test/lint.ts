import fs from 'fs';
import path from 'path';

export function shouldLint(): void {
  console.log('Linting should pass on this file', fs, path);
}
