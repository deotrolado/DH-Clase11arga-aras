const collectiblesModule = require('./collectibles');


let hotToys = collectiblesModule.importar('figuras');
let bandai = collectiblesModule.importar('figuras2.json');
let starWars = collectiblesModule.importar('figuras3.json');

// Crear un único array con Spread Operator
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

// Crear objeto literal
const collectibles = {
  figuras: unifiedCollectibles,

  // Funcionalidad listFigures
  listFigures: function () {
    this.figuras.forEach((figura) => {
      console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
    });
  },

  // Funcionalidad figuresByBrand
  figuresByBrand: function (marca) {
    return this.figuras.filter((figura) => figura.marca.toLowerCase() === marca.toLowerCase());
  },
};

// Comprobando las funcionalidades
console.log("=== Todas las Figuras ===");
collectibles.listFigures();

console.log("\n=== Figuras de Hot Toys ===");
const hotToysFigures = collectibles.figuresByBrand('Hot Toys');
console.log(hotToysFigures);

console.log("\n=== Figuras de Bandai ===");
const bandaiFigures = collectibles.figuresByBrand('Bandai');
console.log(bandaiFigures);

console.log("\n=== Figuras de Star Wars ===");
const starWarsFigures = collectibles.figuresByBrand('Star Wars');
console.log(starWarsFigures);
