const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Activity Bar');

// let bg = palette.editorBg.desaturate(0.1).darken(0.2);
// let fg = bg.desaturate().brighten(4);
// let dropBg = bg.darken();

// log.val('bg', bg.hex());
// log.val('fg', fg.hex());
// log.val('contrast', chroma.contrast(bg, fg).toFixed(2));

module.exports = {
  'activityBar.background': palette.activityBar.bg,
  // 'activityBar.dropBackground': dropBg,
  // 'activityBar.foreground': fg,
  // 'activityBar.border': bg,
  // 'activityBarBadge.background': palette.ansiBlue,
  // 'activityBarBadge.foreground': chroma('white'),
};