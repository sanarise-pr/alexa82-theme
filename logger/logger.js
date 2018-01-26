var clc = require('cli-color');

module.exports = {
  title: function () {
    console.log(clc.yellow('### ', ...arguments));
  },

  val: function () {
    arguments[0] += ':';
    console.log('  ', ...arguments);
  }
};