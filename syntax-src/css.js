const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('CSS');

module.exports = [
  {
    "scope": [
      "support.type.vendored.property-name",
      "support.type.property-name",
      "variable.css",
      "variable.scss",
      "variable.other.less",
      "source.coffee.embedded"
    ],
    "settings": {
      "foreground": palette.colors.blue.desaturate()
    }
  },
  {
    "name": "CSS property name #override",
    "scope": "support.type.property-name",
    "settings": {
      "foreground": palette.colors.cyan.desaturate(0.3)
    }
  },
  // {
  //   "name": "Variable start #new",
  //   "scope": "punctuation.definition.variable",
  //   "settings": {
  //     "foreground": palette.colors.blue
  //   }
  // },
  {
    "scope": [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.class.mixin.css",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.attribute.scss",
      "entity.other.attribute-name.scss"
    ],
    "settings": {
      "foreground": palette.colors.raspberry.brighten()
    }
  },
  {
    "name": "CSS property value",
    "scope": [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value",
      "support.constant.color"
    ],
    "settings": {
      "foreground": palette.colors.orange.desaturate(0.3)
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": palette.colors.orange.darken(0.2)
    }
  },
  {
    "name": "### Comma css",
    "scope": "punctuation.separator.list.comma",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "name": "Tags in css #new",
    "scope": "entity.name.tag.css",
    "settings": {
      "foreground": palette.colors.marine.brighten(0.8)
    }
  }
];