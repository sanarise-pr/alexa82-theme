const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Title Bar");

// let activeBg = palette.titleBg;
// let activeFg = activeBg.set('hsl.l', '-0.8');

// let inactiveBg = activeBg.set('hsl.l', '-0.025');
// let inactiveFg = activeFg.set('hsl.l', '+0.1')

// let titleBr = palette.titleBr;

// log.val("active contrast", chroma.contrast(activeBg, activeFg).toFixed(2));
// log.val("inactive contrast", chroma.contrast(inactiveBg, inactiveFg).toFixed(2));

module.exports = {
  'titleBar.activeBackground': palette.titleBar.activeBg,
  // 'titleBar.activeForeground': activeFg,
  'titleBar.inactiveBackground': palette.titleBar.inactiveBg,
  // 'titleBar.inactiveForeground': inactiveFg,
  // 'titleBar.border': titleBr,
};