const R = require("ramda");

module.exports = {
  do_it: () =>
    R.pipe(R.split(" "), R.map(R.toUpper), R.join(" "))("Go for a bike ride!"),
};
