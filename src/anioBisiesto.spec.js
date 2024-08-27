const esBisiesto = require('./bisiesto');

test('El año 2000 es bisiesto', () => {
  expect(esBisiesto(2000)).toBe(true);
});