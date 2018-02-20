const log = require('./logger/logger');
const chroma = require('chroma-js');

log.title('Palette');

let colors = {
  brightYellow: chroma("dcdcaa"),
  brightBlue: chroma("9cdcfe"),
  brightWhite: chroma('eeeeee'),

  red: chroma('e06c75').darken(0.2),
  green: chroma('9ac181').darken(0.1),
  yellow: chroma('d6c294').darken(0.2),
  blue: chroma('61afef').darken(0.2),
  magenta: chroma('ca90d0'),
  cyan: chroma('56b6c2').brighten(0.2),
  white: chroma('d4d4d4').darken(0.2),
  
  raspberry: chroma('ef61c2').desaturate(2).darken(0.2),
  orange: chroma('D19A66'),
  marine: chroma("93A1D2").darken(0.2),
  cherry: chroma('e06c75').set('hsl.h', '+10').desaturate().brighten(0.5),
  emerald: chroma("81c196").darken(0.2),
};

// ########################### EDITOR ###########################
let editor = {};
editor.bg = chroma('282c34') //333945 343d46
  .set('hsl.h', '+10').darken(0.1); 
editor.selectionBg = editor.bg.brighten();
editor.cursorFg = colors.orange;

// ########################### SIDE BAR ###########################
let sideBar = {};
sideBar.bg = editor.bg.brighten(0.3);
sideBar.br = editor.bg;
sideBar.sectionHeaderBg = editor.bg.brighten(0.9);

// ########################### LIST AND TREES ###########################
let list = {};
list.activeSelectionBg = editor.bg.brighten(0.9);
list.inactiveSelectionBg = list.activeSelectionBg;
list.focusBg = editor.bg.brighten(0.9);

// ########################### ACTIVITY BAR ###########################
let activityBar = {};
activityBar.bg = editor.bg.brighten(0.6);

// ########################### PANEL ###########################
let panel = {};
panel.bg = editor.bg.brighten(0.15);

// ########################### TABS ###########################
let tabs = {};
tabs.activeBg = editor.bg;
tabs.inactiveBg = editor.bg.brighten(0.3);
tabs.noTabsBg = editor.bg.brighten(0.3);
tabs.groupTabsBg = editor.bg.brighten(0.45);

// ########################### TITLE BAR ###########################
let titleBar = {};
titleBar.activeBg = editor.bg.brighten();
titleBar.inactiveBg = editor.bg.brighten(0.8);

// ########################### STATUS BAR ###########################
let statusBar = {};
statusBar.bg = editor.bg.brighten(1.2);

// ########################### SCROLL BAR ###########################
let scrollBar = {};
scrollBar.bg = editor.bg.brighten(4).saturate(0.2).alpha(0.15);
log.val('scroll.bg', scrollBar.bg.hex());

// ########################### TERMINAL ###########################
let terminal = {};
terminal.bg = panel.bg.desaturate(0.1).darken(0.4);

// ########################### SYNTAX ###########################
let syntax = {};
syntax.comments = editor.bg.brighten(2.2);
log.val('coments-editor', chroma.contrast(editor.bg, syntax.comments).toFixed(2));
log.val('coments-white', chroma.contrast(colors.white, syntax.comments).toFixed(2));

// let groundBg = editorBg.brighten(1.4).desaturate(0.15);
// log.val('groundBg', groundBg.hex());

// let lightBg = editorBg.brighten(3.3).desaturate(0.3);
// log.val('lightBg', lightBg.hex());

// let titleBg = lightBg.desaturate().brighten(0.15);
// log.val('titleBg', titleBg.hex());

// let titleBr = titleBg.darken(0.7);
// log.val('titleBr', titleBr.hex());

// let statusBg = editorBg.brighten(3).desaturate(0.2);
// log.val(
//   'statusBg + contrast', 
//   statusBg.hex(), chroma.contrast(editorBg, statusBg).toFixed(2)
// );

// var comentsFg = editorBg.brighten(2);
// log.val('comentsFg contrast', chroma.contrast(editorBg, comentsFg).toFixed(2));

// var orangeFg = chroma('D19A66');

// let temp = {
//   // Backgrounds
//   editorBg: editorBg,
//   groundBg: groundBg,
//   lightBg: lightBg,
//   titleBg: titleBg,
//   titleBr: titleBr,
//   statusBg: statusBg,
//   // statusBg: chroma('abb1ba'),

//   // Foregrounds
//   cursorFg: chroma('SkyBlue'),
//   tabActiveFg: chroma('white').darken(0.3),

//   // Ansi
//   ansiBlack: chroma('1d2025'),
//   ansiRed: chroma('e06c75'),
//   ansiGreen: chroma('9ac181'),
//   ansiYellow: chroma('d6c294'),
//   ansiBlue: chroma('61afef'),
//   ansiMagenta: chroma('ca90d0'),
//   ansiCyan: chroma('56b6c2'),
//   ansiWhite: chroma('bec2ca'),
//   ansiBrightBlack: chroma('21252b'),
//   ansiBrightRed: chroma('e06c75'),
//   ansiBrightGreen: chroma('9ac181'),
//   ansiBrightYellow: chroma('d6c294'),
//   ansiBrightBlue: chroma('61afef'),
//   ansiBrightMagenta: chroma('ca90d0'),
//   ansiBrightCyan: chroma('56b6c2'),
//   ansiBrightWhite: chroma('e3e5e8'),

//   ansiOrange: orangeFg,
//   ansiMarine: chroma("93A1D2"),
//   ansiCherry: chroma("c18190"),
//   ansiEmerald: chroma("81c196"),

//   // Syntax
//   comentsFg: comentsFg,
//   regexpFg: orangeFg
// };

module.exports = {
  colors: colors,
  editor: editor,
  sideBar: sideBar,
  list: list,
  panel: panel,
  tabs: tabs,
  activityBar: activityBar,
  titleBar: titleBar,
  statusBar: statusBar,
  scrollBar: scrollBar,
  terminal: terminal,
  syntax: syntax
};