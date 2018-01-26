const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Merge Conflicts");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "merge.currentHeaderBackground": "#00ffff",
  "merge.currentContentBackground": "#00ffff",
  "merge.incomingHeaderBackground": "#00ffff",
  "merge.incomingContentBackground": "#00ffff",
  "merge.border": "#ff0000",
  "merge.commonContentBackground": "#00ffff",
  "merge.commonHeaderBackground": "#00ffff",
  "editorOverviewRuler.currentContentForeground": "#0000ff",
  "editorOverviewRuler.incomingContentForeground": "#0000ff",
  "editorOverviewRuler.commonContentForeground": "#0000ff",
};