import { Command } from "commander";
import { displayText } from "./utils/display";

import { buildFromSeed } from "./utils/seeding";
import { terraformValidation } from "./utils/validation";

const initCli = () => {
    displayText("green", "< GAIA >", { horizontalLayout: "full" }, true);

    const cli = new Command();

    cli
        .description("Build mockup data with @faker-js/faker and a simple JSON file structure")
        .version("0.0.1-alpha");

    cli
        .command("terraform")
        .argument("<json_path_file>", "File directory of json structure")
        .argument("[file_name]", "Name of final file, defualt value 'mockdata.json'","mockdata")
        .description("Init process of seeding")
        .option("-t, --time", "See the process time of the function")
        .action( buildFromSeed );
    
    // prune commands
    
    cli.parse(process.argv);
}

initCli();