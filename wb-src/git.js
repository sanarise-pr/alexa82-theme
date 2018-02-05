const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Git Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "gitDecoration.modifiedResourceForeground": palette.ansiOrange.saturate(2).darken(2),
  // "gitDecoration.deletedResourceForeground": "#0000ff",
  "gitDecoration.untrackedResourceForeground": palette.ansiGreen.saturate(2).darken(2),
  "gitDecoration.ignoredResourceForeground": palette.lightBg.darken(1.5),
  // "gitDecoration.conflictingResourceForeground": "#0000ff",
};