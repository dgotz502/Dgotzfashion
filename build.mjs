import { cp, rm, mkdir } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await cp('index.html', 'dist/index.html');
console.log('FashionfitDGOTZ static build ready in dist/');
