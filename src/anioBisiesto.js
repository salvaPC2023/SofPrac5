function esBisiesto(ano) {
    if (ano % 400 === 0) {
      return true;
    } else if (ano % 100 === 0) {
      return false;
    } else {
      return true;
    }
  }
  module.exports = esBisiesto;