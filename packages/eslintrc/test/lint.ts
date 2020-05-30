import fs from 'fs';
import path from 'path';

export function shouldLint(_a: string, b: number): void {
	console.log('Linting should pass on this file', b, fs, path);
}
