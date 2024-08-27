const esBisiesto = require('./anioBisiesto');

test('El año 2000 es bisiesto', () => {
    expect(esBisiesto(2000)).toBe(true);
  });
  
test('El año 1600 no es bisiesto', () => {
    expect(esBisiesto(1601)).toBe(false);
});

test('El año 2008 es bisiesto', () => {
  expect(esBisiesto(2008)).toBe(true);
});