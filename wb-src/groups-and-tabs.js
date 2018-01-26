const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Editor Groups & Tabs');

// Tabs
let activeBg = palette.primaryBg;
let activeFg = palette.tabActiveFg;

let inactiveBg = activeBg.desaturate(0.05).brighten(0.6);
let inactiveFg = activeFg.darken();

let tabBorder = palette.primaryBg;
let groupBorder = palette.primaryBg.set('hsl.l', '-0.1');

// Groups
let tabsBg = palette.groundBg;
let noTabsBg = inactiveBg;

log.val('tab active contrast', chroma.contrast(activeBg, activeFg).toFixed(2));
log.val('tab inactive contrast', chroma.contrast(inactiveBg, inactiveFg).toFixed(2));

module.exports = {
  'editorGroup.background': chroma('orange'),
  'editorGroup.border': groupBorder, // 1px vertical line between groups
  'editorGroup.dropBackground': chroma('hotpink'),
  'editorGroupHeader.noTabsBackground': noTabsBg,
  'editorGroupHeader.tabsBackground': tabsBg,
  'editorGroupHeader.tabsBorder': tabBorder, // 1px bottom border
  'tab.activeBackground': activeBg,
  'tab.activeForeground': activeFg,
  'tab.border': tabBorder, // left right 1px border
  'tab.activeBorder': tabBorder, // aditional 1px bottom border on active tab
  'tab.unfocusedActiveBorder': tabBorder,
  'tab.inactiveBackground': inactiveBg,
  'tab.inactiveForeground': inactiveFg,
  'tab.unfocusedActiveForeground': inactiveFg,
  'tab.unfocusedInactiveForeground': inactiveFg,
};