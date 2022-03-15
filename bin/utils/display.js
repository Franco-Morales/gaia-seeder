"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayText = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {string} color chalk color option
 * @param {string} text 
 * @param {*} opts figlet options
 * @param {boolean} clearPrevText 
 */
const displayText = (color, text, opts, clearPrevText = false) => {
  if (clearPrevText) console.clear();
  console.log(_chalk.default[color](opts ? _figlet.default.textSync(text, opts) : text));
};

exports.displayText = displayText;