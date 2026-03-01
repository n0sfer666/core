import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function r(dir) {
  fs.readdirSync(dir).forEach((f) => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      r(p);
    } else if (p.endsWith('.js')) {
      let c = fs.readFileSync(p, 'utf8');
      c = c.replace(/from '\.\/([^'.]+)'/g, 'from \'./$1.js\'');
      fs.writeFileSync(p, c);
    }
  });
}

r(path.join(__dirname, '../dist'));
console.error('Added .js extensions to relative imports');
