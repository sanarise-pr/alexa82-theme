const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Var');

module.exports = [
  {
    "name": "Variable and parameter name",
    "scope": [
      "variable",
      "meta.definition.variable.name",
      "support.variable"
    ],
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "name": "Support variable #override",
    "scope": "support.variable",
    "settings": {
      "foreground": palette.colors.marine
    }
  },
  {
    "name": "Support variable property #override",
    "scope": "support.variable.property",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "name": "Types declaration and references",
    "scope": [
      "meta.return-type",
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.class",
      "storage.type.numeric.go",
      "storage.type.byte.go",
      "storage.type.boolean.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
      "storage.type.cs",
      "storage.type.generic.cs",
      "storage.type.modifier.cs",
      "storage.type.variable.cs",
      "storage.type.annotation.java",
      "storage.type.generic.java",
      "storage.type.java",
      "storage.type.object.array.java",
      "storage.type.primitive.array.java",
      "storage.type.primitive.java",
      "storage.type.token.java",
      "storage.type.groovy",
      "storage.type.annotation.groovy",
      "storage.type.parameters.groovy",
      "storage.type.generic.groovy",
      "storage.type.object.array.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.groovy"
    ],
    "settings": {
      "foreground": palette.colors.cherry
    }
  },
  {
    "name": "Types declaration and references, TS grammar specific",
    "scope": [
      "meta.type.cast.expr",
      "meta.type.new.expr",
      "support.constant.math",
      "support.constant.dom",
      "support.constant.json",
      "entity.other.inherited-class"
    ],
    "settings": {
      "foreground": "#4EC9B0"
    }
  },
  {
    "name": "#override Inherited class",
    "scope": "entity.other.inherited-class",
    "settings": {
      "foreground": palette.colors.cherry.darken(0.5)
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "name": "#new JSON property name",
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "name": "Object keys, TS grammar specific",
    "scope": [
      "meta.object-literal.key"
    ],
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "name": "#new Constant name",
    "scope": [
      "variable.other.constant"
    ],
    "settings": {
      "foreground": palette.colors.green
    }
  }
];