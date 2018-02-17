const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Notification Dialog Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "notification.background": "#00ffff",
  "notification.foreground": "#0000ff",
  "notification.buttonBackground": "#00ffff",
  "notification.buttonForeground": "#0000ff",
  "notification.buttonHoverBackground": "#00ffff",
  "notification.errorBackground": "#00ffff",
  "notification.errorForeground": "#0000ff",
  "notification.infoBackground": "#00ffff",
  "notification.infoForeground": "#0000ff",
  "notification.warningBackground": "#00ffff",
  "notification.warningForeground": "#0000ff",
};