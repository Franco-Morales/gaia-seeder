import chalk from 'chalk';
import figlet from "figlet";

/**
 * 
 * @param {string} color chalk color option
 * @param {string} text 
 * @param {*} opts figlet options
 * @param {boolean} clearPrevText 
 */
export const displayText = (color, text, opts, clearPrevText = false) => {
    if(clearPrevText) console.clear();

    console.log(
        chalk[color](
            opts? figlet.textSync(text, opts) : text
        )
    )
}