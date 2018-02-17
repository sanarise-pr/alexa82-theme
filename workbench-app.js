'use strict';

const SETTINGS_FILE = __dirname + '/../alexa82.code-workspace';

const fs = require('fs');
const clc = require('cli-color');
const workbenchDefaults = require('./wb-src/colors/defaults');

let settings = stringifyColors(Object.assign({}, ...[
  require('./wb-src/base'),
  require('./wb-src/text'),
  require('./wb-src/input-control'),
  require('./wb-src/scroll-bar'),
  require('./wb-src/lists-and-trees'),
  require('./wb-src/activity-bar'),
  require('./wb-src/side-bar'),
  require('./wb-src/groups-and-tabs.js'),
  require('./wb-src/editor.js'),
  require('./wb-src/editor-overview-ruler.js'),
  require('./wb-src/editor-warnings.js'),
  require('./wb-src/editor-gutter.js'),
  require('./wb-src/editor-widget.js'),
  require('./wb-src/panel'),
  require('./wb-src/status-bar'),
  require('./wb-src/title-bar'),
  require('./wb-src/terminal'),
  require('./wb-src/git')
]));
writeSettings(SETTINGS_FILE, Object.assign({}, workbenchDefaults, settings));

function stringifyColors (settings) {
  return Object.keys(settings).reduce((output, key) => {
    let color = settings[key];
    let hexStr = color.hex();
    if (color.alpha() < 1) {
      hexStr += Number(Math.floor(color.alpha() * 255)).toString(16).padStart(2, '0');
    }
    output[key] = hexStr;
    return output;
  }, {});
}

function writeSettings (settingsFile, settings) {
  fs.readFile(settingsFile, 'utf8', (err, data) => {
    if (err) throw err;
    
    var json = JSON.parse(data);
    json.settings['workbench.colorCustomizations'] = settings;
    
    fs.writeFile(settingsFile, JSON.stringify(json, null, "  "), (err) => {
      if (err) throw err;
      console.log(clc.green('Done!'));
    });
  });
}