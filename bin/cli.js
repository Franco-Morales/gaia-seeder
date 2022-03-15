"use strict";

var _commander = require("commander");

var _display = require("./utils/display");

var _seeding = require("./utils/seeding");

var _validation = require("./utils/validation");

const initCli = () => {
  (0, _display.displayText)("green", "< GAIA >", {
    horizontalLayout: "full"
  }, true);
  const cli = new _commander.Command();
  cli.description("Build mockup data with @faker-js/faker and a simple JSON file structure").version("0.0.1-alpha");
  cli.command("terraform").argument("<json_path_file>", "File directory of json structure").argument("[file_name]", "Name of final file, defualt value 'mockdata.json'", "mockdata").description("Init process of seeding").option("-t, --time", "See the process time of the function").action(_seeding.buildFromSeed); // prune commands

  cli.parse(process.argv);
};

initCli();