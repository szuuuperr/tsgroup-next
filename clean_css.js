const fs = require('fs');
const css = fs.readFileSync('app/globals.css', 'utf8');
let newCss = '';
let skip = false;
let inMedia = false;
const lines = css.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Start skipping at TOP BAR
  if (line.includes('/* ===== TOP BAR ===== */')) {
    skip = true;
  }

  // Stop skipping at Responsive sections to keep the media query shells, 
  // BUT we will also just delete the whole media queries and rewrite them if needed.
  // Actually, wait, let's just delete everything from TOP BAR up to the end of the file except the Destinasi Wisata page stuff?
  // No, the user wants me to delete the specific components.
  // Let's do it section by section.
  
  if (line.includes('/* ===== RESPONSIVE - SMALL DESKTOP / LARGE TABLET (max 1280px) ===== */')) {
    skip = false;
  }

  if (!skip) {
    newCss += line + '\n';
  }
}

fs.writeFileSync('app/globals.css', newCss);
