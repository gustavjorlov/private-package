const R = require("ramda");

module.exports = {
  do_it: (what) =>
    R.pipe(R.split(" "), R.map(R.toUpper), R.join(" "))(what),
};
