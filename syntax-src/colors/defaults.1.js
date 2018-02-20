const palette = require('../../palette');

module.exports = [
  {
    "settings": {
      "foreground": palette.colors.white.alpha(0.99),
      "background": palette.editor.bg.alpha(0.99)
    }
  },
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded"
    ],
    "settings": {
      "foreground": palette.colors.white
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
    "scope": "constant.regexp",
    "settings": {
      "foreground": palette.colors.orange
    }
  },
  {
    "scope": "entity.name.tag",
    "settings": {
      "foreground": palette.colors.marine
    }
  },
  {
    "scope": "entity.name.tag.css",
    "settings": {
      "foreground": palette.colors.marine
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": palette.colors.emerald
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
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": palette.colors.red
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
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#569cd6"
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
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "beginning.punctuation.definition.quote.markdown",
    "settings": {
      "foreground": "#608b4e"
    }
  },
  {
    "scope": "beginning.punctuation.definition.list.markdown",
    "settings": {
      "foreground": "#6796e6"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "meta.selector",
    "settings": {
      "foreground": palette.colors.blue
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
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": palette.colors.marine
    }
  },
  {
    "name": "### Doctype",
    "scope": "meta.tag.sgml.doctype",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "name": "### Tag",
    "scope": "meta.tag",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "scope": "meta.preprocessor",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "storage",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "name": "### Function keyword",
    "scope": "storage.type.function",
    "settings": {
      "foreground": palette.colors.magenta
    }
  },
  {
    "scope": "storage.modifier",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "scope": "string",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "scope": "string.tag",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "scope": "string.value",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": palette.colors.orange
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
      "foreground": palette.colors.blue
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": "#d4d4d4"
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
      "foreground": palette.colors.white
    }
  },
  {
    "name": "### JSON property name",
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "keyword.control",
    "settings": {
      "foreground": palette.colors.magenta
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": palette.colors.brightWhite
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
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": palette.colors.orange
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": palette.colors.orange
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
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": palette.colors.blue
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
      "foreground": palette.colors.magenta
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
      "foreground": palette.colors.cyan
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
      "foreground": palette.colors.cyan
    }
  },
  {
    "name": "Control flow keywords",
    "scope": "keyword.control",
    "settings": {
      "foreground": palette.colors.blue
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
      "foreground": palette.colors.white
    }
  },
  {
    "name": "### Constant name",
    "scope": [
      "variable.other.constant"
    ],
    "settings": {
      "foreground": palette.colors.green
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
      "foreground": palette.colors.magenta
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
      "foreground": palette.colors.yellow
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
      "foreground": palette.colors.orange
    }
  },
  {
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": palette.colors.white
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
      "foreground": palette.colors.orange
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
  }
];