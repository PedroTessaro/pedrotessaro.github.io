/**
 * Tema do Shiki com as cores do "Default (Dark)" do Xcode, para os trechos de
 * código parecerem o que são: código Swift aberto no Xcode.
 */
export const xcodeDark = {
  name: "xcode-default-dark",
  type: "dark",
  colors: {
    "editor.background": "#1f1f24",
    "editor.foreground": "#dfdfe0",
  },
  tokenColors: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#7f8c98" } },
    {
      scope: ["comment.block.documentation", "comment.line.triple-slash.documentation"],
      settings: { foreground: "#7f8c98" },
    },
    {
      scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.control", "constant.language", "variable.language"],
      settings: { foreground: "#ff7ab2", fontStyle: "bold" },
    },
    { scope: ["string", "string.quoted"], settings: { foreground: "#ff8170" } },
    { scope: ["constant.character.escape"], settings: { foreground: "#ff8170" } },
    { scope: ["constant.numeric"], settings: { foreground: "#d9c97c" } },
    {
      scope: ["entity.name.type", "support.type", "entity.name.class", "entity.name.struct", "entity.name.enum", "entity.other.inherited-class"],
      settings: { foreground: "#dabaff" },
    },
    { scope: ["support.class", "support.type.swift"], settings: { foreground: "#dabaff" } },
    { scope: ["entity.name.function"], settings: { foreground: "#67b7a4" } },
    { scope: ["support.function", "meta.function-call entity.name.function"], settings: { foreground: "#b281eb" } },
    { scope: ["variable.other.member", "support.variable"], settings: { foreground: "#78c2b3" } },
    { scope: ["keyword.other.import", "meta.preprocessor"], settings: { foreground: "#ffa14f" } },
    { scope: ["entity.other.attribute-name", "storage.type.attribute"], settings: { foreground: "#cc9768" } },
  ],
};
