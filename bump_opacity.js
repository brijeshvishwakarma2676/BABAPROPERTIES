const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace text-white/XX
  content = content.replace(/text-white\/(\d+)/g, (match, p1) => {
    let val = parseInt(p1, 10);
    if (val < 30) val += 30;
    else if (val < 50) val += 30;
    else if (val < 70) val += 20;
    else if (val < 90) val += 15;
    else val = 100;
    
    if (val >= 100) return 'text-white';
    return `text-white/${val}`;
  });

  // Replace text-gold/XX
  content = content.replace(/text-gold\/(\d+)/g, (match, p1) => {
    let val = parseInt(p1, 10);
    if (val < 30) val += 30;
    else if (val < 50) val += 30;
    else if (val < 70) val += 20;
    else if (val < 90) val += 15;
    else val = 100;
    
    if (val >= 100) return 'text-gold';
    return `text-gold/${val}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('Done.');
