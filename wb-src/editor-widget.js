const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Editor Widget Colors');

let bg = palette.lightBg.darken(0.25);
let br = bg.darken(0.5);

let hoverBg = palette.primaryBg.brighten().desaturate(0.05);
let hoverBr = hoverBg.darken(0.25);

// log.val('contrast', chroma.contrast(bg, fg));

module.exports = {
  'editorWidget.background': bg,
  'editorWidget.border': br,

  // 'editorSuggestWidget.background': chroma('00ffff'),
  // 'editorSuggestWidget.border': chroma('ff0000'),
  // 'editorSuggestWidget.foreground': chroma('0000ff'),
  // 'editorSuggestWidget.selectedBackground': chroma('00ffff'),
  // 'editorSuggestWidget.highlightForeground': chroma('0000ff'),

  'editorHoverWidget.background': hoverBg,
  'editorHoverWidget.border': hoverBr,

  // 'debugExceptionWidget.background': chroma('00ffff'),
  // 'debugExceptionWidget.border': chroma('ff0000'),

  // 'editorMarkerNavigation.background': chroma('00ffff'),
  // 'editorMarkerNavigationError.background': chroma('00ffff'),
  // 'editorMarkerNavigationWarning.background': chroma('00ffff'),
  // 'editorMarkerNavigationInfo.background': chroma('00ffff'),
};