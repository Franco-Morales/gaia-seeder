"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFromSeed = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _display = require("./display");

var _validation = require("./validation");

var _build = _interopRequireDefault(require("./build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildFromSeed = (jsonPathFile, fileName, options) => {
  (0, _display.displayText)("gray", "Demeter module -> init: f()");
  if (options.time) console.time("Time");
  const {
    status,
    data
  } = (0, _validation.terraformValidation)(jsonPathFile);

  try {
    if (status) {
      let mockupPath = getNormalizePath(jsonPathFile, fileName);
      let mockupJson = JSON.stringify((0, _build.default)(data), null, 4);

      _fs.default.writeFileSync(mockupPath, mockupJson);
    }
  } catch (error) {
    console.error(error);
  }

  if (options.time) console.timeEnd("Time");
  (0, _display.displayText)("gray", "Demeter module -> end: f()");
};

exports.buildFromSeed = buildFromSeed;

const getNormalizePath = (pathFile, fileName = "mockdata") => {
  let auxPath = pathFile.split("/");
  auxPath.pop();
  let mockDataPath = auxPath.join("/");
  return `${mockDataPath}/${fileName === "" ? "mockdata" : fileName}.json`;
};
/**
 * Demeter module
 */