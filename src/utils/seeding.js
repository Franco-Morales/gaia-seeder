import fs from "fs";
import { displayText } from "./display";
import { terraformValidation } from "./validation";
import Builder from "./build";



const buildFromSeed = (jsonPathFile, fileName, options) => {
    displayText("gray", "Demeter module -> init: f()");

    if(options.time) console.time("Time");

    const { status, data } = terraformValidation(jsonPathFile);

    try {
        if(status) {
            let mockupPath  = getNormalizePath(jsonPathFile, fileName);
            let mockupJson = JSON.stringify( Builder(data), null, 4 );
            fs.writeFileSync(mockupPath, mockupJson);
        }
    } catch (error) {
        console.error(error);
    }

    if(options.time) console.timeEnd("Time");
    displayText("gray", "Demeter module -> end: f()");
}

const getNormalizePath = (pathFile, fileName = "mockdata") => {
    let auxPath = pathFile.split("/");
    auxPath.pop();
    let mockDataPath = auxPath.join("/");

    return `${mockDataPath}/${fileName === "" ? "mockdata" : fileName}.json`;
}


/**
 * Demeter module
 */
export { buildFromSeed };