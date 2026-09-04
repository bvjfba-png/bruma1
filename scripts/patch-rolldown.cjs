const fs = require('fs');
const path = require('path');

const root = process.cwd();
const targetDir = path.join(root, 'node_modules', 'rolldown', 'dist');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.mjs') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

if (!fs.existsSync(targetDir)) {
  console.warn('rolldown dist not found; skipping patch.');
  process.exit(0);
}

const files = walk(targetDir);
let patched = 0;

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes("from \"node:util\"")) {
    const rel = path.relative(path.dirname(file), path.join(root, 'src', 'shims', 'node-util.js')).replace(/\\/g, '/');
    const spec = rel.startsWith('.') ? rel : './' + rel;
    const replaced = content.replace(/import \{\s*formatWithOptions\s*,\s*styleText\s*\} from \"node:util\";/g, `import { formatWithOptions, styleText } from \"${spec}\";`);
    if (replaced !== content) {
      fs.writeFileSync(file, replaced, 'utf8');
      patched++;
      console.log('Patched', file);
    }
  }
});

if (patched === 0) {
  console.log('No rolldown imports found to patch.');
} else {
  console.log('Patched', patched, 'files.');
}
