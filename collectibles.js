const fs = require('fs');

function importar(marca) {
  const filePath = `./datos/${marca.toLowerCase()}1.json`;
  const filePath = `./datos/${marca.toLowerCase()}2.json`;
  const filePath = `./datos/${marca.toLowerCase()}3.json`;
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const figuras = JSON.parse(data);
    return figuras;
  } catch (error) {
    console.error(`Error al importar figuras de ${marca}: ${error.message}`);
    return [];
  }
}

module.exports = { importar };

