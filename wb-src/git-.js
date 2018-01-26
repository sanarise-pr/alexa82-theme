const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Git Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "gitDecoration.modifiedResourceForeground": "#0000ff",
  "gitDecoration.deletedResourceForeground": "#0000ff",
  "gitDecoration.untrackedResourceForeground": "#0000ff",
  "gitDecoration.ignoredResourceForeground": "#0000ff",
  "gitDecoration.conflictingResourceForeground": "#0000ff",
};