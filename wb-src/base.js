const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Base Colors");

// let widgetShadow = palette.editorBg.darken();
// let focusBorder = palette.cursorFg.set('hsl.s', '-0.3')

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  // "focusBorder": focusBorder, // бордер вокруг поля поиска в настройках
  // "foreground": chroma('lightgrey'), // заголовки на добро пожаловать
  // "widget.shadow": widgetShadow, // цвет тени виджета поиска
  // "selection.background": chroma('lightgrey').darken(0.3), // выделение в поле поиска
  // "descriptionForeground": chroma('grey'), // текст на Welcome
  // "errorForeg round": palette.ansiRed, // текст в поле поиска если нет результатов
};