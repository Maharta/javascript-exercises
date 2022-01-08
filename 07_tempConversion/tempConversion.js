const ftoc = function(value) {
  value = (value - 32) * 5/9;
  return Math.round(value * 10) / 10;

};

const ctof = function(value) {
  value = value * 9/5 + 32;
  return Math.round(value * 10) / 10

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
