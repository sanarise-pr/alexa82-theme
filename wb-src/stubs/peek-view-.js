const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Peek View Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "peekView.border": "#ff0000",
  "peekViewEditor.background": "#00ffff",
  "peekViewEditorGutter.background": "#00ffff",
  "peekViewEditor.matchHighlightBackground": "#00ffff",
  "peekViewResult.background": "#00ffff",
  "peekViewResult.lineForeground": "#0000ff",
  "peekViewResult.fileForeground": "#0000ff",
  "peekViewResult.selectionBackground": "#00ffff",
  "peekViewResult.selectionForeground": "#0000ff",
  "peekViewResult.matchHighlightBackground": "#00ffff",
  "peekViewTitle.background": "#00ffff",
  "peekViewTitleLabel.foreground": "#0000ff",
  "peekViewTitleDescription.foreground": "#0000ff",
};