module.exports = function average(...args) {
  var sum = args.reduce((output, arg) => output + arg, 0)
  return sum / args.length
};
