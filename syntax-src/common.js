const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Common');

module.exports = [
  {
    "settings": {
      "foreground": palette.colors.white.hex() + 'ff',
      "background": palette.editor.bg.hex() + 'ff'
    }
  },
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded"
    ],
    "settings": {
      "foreground": "#D4D4D4"
    }
  },
  {
    "scope": "emphasis",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "strong",
    "settings": {
      "fontStyle": "bold"
    }
  },
  {
    "scope": "header",
    "settings": {
      "foreground": "#000080"
    }
  },
  {
    "scope": "comment",
    "settings": {
      "fontStyle": "italic",
      "foreground": palette.syntax.comments
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": "#f44747"
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": [
      "constant.numeric"
    ],
    "settings": {
      "foreground": palette.colors.orange
    }
  },
  {
    "scope": "constant.character",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": "#d7ba7d"
    }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": "#6796e6"
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": "#cd9731"
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": "#f44747"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "#b267e6"
    }
  },
  {
    "scope": "support.function.git-rebase",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "constant.sha.git-rebase",
    "settings": {
      "foreground": "#b5cea8"
    }
  }
];