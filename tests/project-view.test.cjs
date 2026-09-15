const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { test } = require("node:test");
const ts = require("typescript");

// Ejecuta el módulo TypeScript real con las dependencias ya instaladas.
const filename = path.resolve(
  __dirname,
  "../src/app/(pages)/home/_domain/project-view.ts"
);
const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const loaded = new Module(filename, module);
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(compiled, filename);
const { getProjectUrl } = loaded.exports;

const project = {
  viewMode: "external",
  type: "case-study",
  featured: true,
  publicUrl: "https://example.com/live",
  link: "https://example.com/legacy",
  pageLink: "captura-demo",
  pageImage: {
    src: "/images/portfolio/projects-page/captura-demo.webp",
    width: 1360,
    height: 5404,
  },
};

test("el modo externo prioriza la URL pública aunque exista una captura", () => {
  assert.equal(getProjectUrl(project), "https://example.com/live");
});

test("un proyecto anterior puede abrir una web aun teniendo slug", () => {
  assert.equal(
    getProjectUrl({ ...project, type: undefined, publicUrl: "" }),
    "https://example.com/legacy"
  );
});

test("un caso destacado puede abrir una captura sin cambiar su categoría", () => {
  assert.equal(
    getProjectUrl({ ...project, viewMode: "image" }),
    "/portafolio/captura-demo"
  );
});

test("sin URL externa no cambia silenciosamente a la captura", () => {
  assert.equal(getProjectUrl({ ...project, publicUrl: "", link: " " }), null);
});

test("un modo ausente no hereda la regla antigua de categoría", () => {
  assert.equal(getProjectUrl({ ...project, viewMode: undefined }), null);
});

for (const url of ["sin-dominio", "javascript:alert(1)", "ftp://example.com"]) {
  test(`el modo externo omite una URL no web: ${url}`, () => {
    assert.equal(getProjectUrl({ ...project, publicUrl: url }), null);
  });
}

for (const [name, overrides] of [
  ["sin slug", { pageLink: undefined }],
  ["slug vacío", { pageLink: " " }],
  ["sin captura", { pageImage: undefined }],
  ["ruta vacía", { pageImage: { ...project.pageImage, src: " " } }],
  ["sin ruta", { pageImage: { width: 100, height: 200 } }],
  ["imagen remota", { pageImage: { ...project.pageImage, src: "https://example.com/a.webp" } }],
  ["imagen sin protocolo", { pageImage: { ...project.pageImage, src: "//example.com/a.webp" } }],
  ["ancho cero", { pageImage: { ...project.pageImage, width: 0 } }],
  ["alto negativo", { pageImage: { ...project.pageImage, height: -1 } }],
  ["dimensión no finita", { pageImage: { ...project.pageImage, height: Infinity } }],
]) {
  test(`el modo imagen ${name} omite el enlace aunque exista URL externa`, () => {
    assert.equal(getProjectUrl({ ...project, viewMode: "image", ...overrides }), null);
  });
}
