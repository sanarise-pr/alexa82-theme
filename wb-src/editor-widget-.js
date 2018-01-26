const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Editor Widget Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "editorWidget.background": "#00ffff",
  "editorWidget.border": "#ff0000",

  "editorSuggestWidget.background": "#00ffff",
  "editorSuggestWidget.border": "#ff000000",
  "editorSuggestWidget.foreground": "#0000ff",
  "editorSuggestWidget.selectedBackground": "#00ffff",
  "editorSuggestWidget.highlightForeground": "#0000ff",

  "editorHoverWidget.background": "#00ffff",
  "editorHoverWidget.border": "#ff0000",

  "debugExceptionWidget.background": "#00ffff",
  "debugExceptionWidget.border": "#ff0000",

  "editorMarkerNavigation.background": "#00ffff",
  "editorMarkerNavigationError.background": "#00ffff",
  "editorMarkerNavigationWarning.background": "#00ffff",
  "editorMarkerNavigationInfo.background": "#00ffff",
};