module.exports = function midpoint(val, exclamations = val.length) {
  return `${val}${'!'.repeat(exclamations)}`
};
