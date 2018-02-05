const palette = require('../../palette');

module.exports = [
  {
    "settings": {
      "foreground": palette.ansiWhite,
      "background": palette.primaryBg
    }
  },
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded"
    ],
    "settings": {
      "foreground": palette.ansiWhite
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
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#000080"
    }
  },
  {
    "scope": "comment",
    "settings": {
      "fontStyle": "italic",
      "foreground": palette.comentsFg
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": [
      "constant.numeric"
    ],
    "settings": {
      "foreground": palette.ansiOrange
    }
  },
  {
    "scope": "constant.regexp",
    "settings": {
      "foreground": palette.regexpFg
    }
  },
  {
    "name": "css tags in selectors, xml tags",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": palette.ansiMarine
    }
  },
  {
    "scope": "entity.name.selector",
    "settings": {
      "foreground": "#800000"
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": palette.ansiEmerald
    }
  },
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
      "foreground": "#800000"
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": palette.ansiRed
    }
  },
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#000080"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#800000"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": "#09885a"
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#a31515"
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": "#0451a5"
    }
  },
  {
    "scope": [
      "beginning.punctuation.definition.quote.markdown",
      "beginning.punctuation.definition.list.markdown"
    ],
    "settings": {
      "foreground": "#0451a5"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#800000"
    }
  },
  {
    "scope": "meta.selector",
    "settings": {
      "foreground": "#800000"
    }
  },
  {
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "scope": "meta.preprocessor",
    "settings": {
      "foreground": "#0000ff"
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": "#a31515"
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": "#09885a"
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": "#0451a5"
    }
  },
  {
    "scope": "storage",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "### Function keyword",
    "scope": "storage.type.function",
    "settings": {
      "foreground": palette.ansiBrightWhite
    }
  },
  {
    "scope": "storage.modifier",
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "scope": "string",
    "settings": {
      "foreground": palette.ansiYellow
    }
  },
  {
    "scope": [
      "string.comment.buffered.block.jade",
      "string.quoted.jade",
      "string.interpolated.jade",
      "string.unquoted.plain.in.yaml",
      "string.unquoted.plain.out.yaml",
      "string.unquoted.block.yaml",
      "string.quoted.single.yaml",
      "string.quoted.double.xml",
      "string.quoted.single.xml",
      "string.unquoted.cdata.xml",
      "string.quoted.double.html",
      "string.quoted.single.html",
      "string.unquoted.html",
      "string.quoted.single.handlebars",
      "string.quoted.double.handlebars"
    ],
    "settings": {
      "foreground": palette.ansiYellow
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": palette.regexpFg
    }
  },
  {
    "name": "String interpolation",
    "scope": [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": "#000000"
    }
  },
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
      "foreground": "#ff0000"
    }
  },
  {
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": "#0451a5"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": palette.ansiBrightWhite
    }
  },
  {
    "scope": [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.cast",
      "keyword.operator.sizeof",
      "keyword.operator.logical.python"
    ],
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": palette.ansiOrange
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": palette.ansiOrange
    }
  },
  {
    "scope": "support.function.git-rebase",
    "settings": {
      "foreground": "#0451a5"
    }
  },
  {
    "scope": "constant.sha.git-rebase",
    "settings": {
      "foreground": palette.ansiOrange
    }
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java"
    ],
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars"
    ],
    "settings": {
      "foreground": palette.ansiCherry
    }
  },
  {
    "name": "### Function call",
    "scope": [
      "meta.function-call entity.name.function",
      "meta.method-call entity.name.function",
      "meta.function-call support.function",
      "meta.method-call support.function"
    ],
    "settings": {
      "foreground": palette.ansiMagenta
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
      "foreground": palette.ansiCyan
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
      "foreground": palette.ansiMarine
    }
  },
  {
    "name": "Control flow keywords",
    "scope": "keyword.control",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "Variable and parameter name",
    "scope": [
      "variable",
      "meta.definition.variable.name",
      "support.variable"
    ],
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "name": "### Constant name",
    "scope": [
      "variable.other.constant"
    ],
    "settings": {
      "foreground": palette.ansiGreen
    }
  },
  {
    "name": "Object keys, TS grammar specific",
    "scope": [
      "meta.object-literal.key"
    ],
    "settings": {
      "foreground": palette.ansiWhite
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
      "foreground": "#0451a5"
    }
  },
  {
    "name": "Regular expression groups",
    "scope": [
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "keyword.operator.negation.regexp",
      "support.other.parenthesis.regexp"
    ],
    "settings": {
      "foreground": palette.ansiYellow
    }
  },
  {
    "scope": [
      "constant.character.character-class.regexp",
      "constant.other.character-class.set.regexp",
      "constant.other.character-class.regexp",
      "constant.character.set.regexp"
    ],
    "settings": {
      "foreground": palette.regexpFg
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "constant.character",
    "settings": {
      "foreground": "#0000ff"
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": palette.ansiOrange
    }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": "#316bcd"
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
      "foreground": "#cd3131"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "#800080"
    }
  }
];