'use strict';

const SETTINGS_FILE = __dirname + '/../alexa82.code-workspace';

const fs = require('fs');
const clc = require('cli-color');
const syntaxDefaults = require('./syntax-src/colors/defaults');

let settings = syntaxDefaults.concat(...[
  require('./syntax-src/common'),
  require('./syntax-src/css'),
  require('./syntax-src/function'),
  require('./syntax-src/keyword'),
  require('./syntax-src/markup'),
  require('./syntax-src/meta'),
  require('./syntax-src/regexp'),
  require('./syntax-src/storage'),
  require('./syntax-src/string'),
  require('./syntax-src/tag'),
  require('./syntax-src/var')
]);
stringifyColors(settings);
writeSettings(SETTINGS_FILE, settings);

function stringifyColors (settings) {
  settings.forEach((rule) => {
    ['foreground', 'background'].forEach((key) => {
      if (rule.settings[key] && typeof rule.settings[key]['alpha'] === 'function') {
        rule.settings[key] = stringifyColor(rule.settings[key]);
      }
    });
  });
}

function stringifyColor (color) {
  let hexStr = color.hex();
  if (color.alpha() < 1) {
    hexStr += Number(Math.floor(color.alpha() * 255)).toString(16).padStart(2, '0');
  }
  return hexStr;
}

function writeSettings (settingsFile, settings) {
  fs.readFile(settingsFile, 'utf8', (err, data) => {
    if (err) throw err;
    
    let json = JSON.parse(data);
    if (!json.settings['editor.tokenColorCustomizations']) {
      json.settings['editor.tokenColorCustomizations'] = {};
    }
    json.settings['editor.tokenColorCustomizations']['textMateRules'] = settings;
    
    fs.writeFile(settingsFile, JSON.stringify(json, null, "  "), (err) => {
      if (err) throw err;
      console.log(clc.green('Done!'));
    });
  });
}