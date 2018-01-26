const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Editor");

let bg = palette.primaryBg;
let guides = bg.brighten(0.3);
let ruler = bg.brighten(0.6);

let lineNumbers = bg.brighten();
let lineHighlightBg = bg.set('hsl.l', '-0.02');

let selectionBg = bg.brighten();

let bracketBg = bg;
let bracketBorder = palette.cursorFg.set('hsl.l', '-0.1');;

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "editor.background": bg,
  // "editor.foreground": chroma('green'), // цвет надписи при наведении на карандаш в настройках
  "editorLineNumber.foreground": lineNumbers,
  // "editorCursor.background": chroma('yellow'), // цвет символа под блочным курсором
  "editorCursor.foreground": palette.cursorFg,

  "editor.selectionBackground": selectionBg,
  // "editor.selectionForeground": chroma('00ffff'),
  // "editor.selectionHighlightBackground": chroma('3e4551'),
  // "editor.inactiveSelectionBackground": chroma('333842'),

  // "editor.wordHighlightBackground": chroma('00ffff'),
  // "editor.wordHighlightBackground": chroma('333842'), // todo
  // "editor.wordHighlightStrongBackground": chroma('00ffff'),

  // "editor.findMatchBackground": chroma('00ffff'), // результаты текстового поиска
  // "editor.findMatchHighlightBackground": chroma('00ffff'),
  // "editor.findRangeHighlightBackground": chroma('00ffff'),

  // "editor.hoverHighlightBackground": chroma('00ffff'), // цвет выделения для текста с подсказкой

  "editor.lineHighlightBackground": lineHighlightBg,
  "editor.lineHighlightBorder": lineHighlightBg,

  // "editorLink.activeForeground": chroma('00ffff'),

  // "editor.rangeHighlightBackground": chroma('00ffff'),
  // "editorWhitespace.foreground": chroma('303641'),
  "editorIndentGuide.background": guides, // направляющие отступов
  "editorRuler.foreground": ruler, // ограничения длины строки
  // "editorCodeLens.foreground": chroma('505762'),

  "editorBracketMatch.background": bracketBg,
  "editorBracketMatch.border": bracketBorder,
};