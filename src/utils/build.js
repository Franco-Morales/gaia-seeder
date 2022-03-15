import { faker } from "@faker-js/faker";


const Builder = (arrayCollections) => {
    let newData = {};

    //colt === collection

    for (const colt of arrayCollections) {
        let { type, collection: coltName, quantity } = colt;
        let auxColt = [];

        for (let i = 0; i < quantity; i++) {
            let auxObj = {};
            for (const key in type) {
                auxObj[key] = getDataFromFaker(type[key])
            }
            auxObj["builder"] = "gaia_engine";
            auxColt.push(auxObj);
        }

        newData[coltName] = auxColt;
    }

    return newData;
}

const getDataFromFaker = (fakerStringFormat) => {
    try {
        const [ fakerCats, params ] = fakerStringFormat.includes("|")? fakerStringFormat.split("|") : [ fakerStringFormat, ""];

        const [ category, subCategory ] = fakerCats.split(".");

        return faker[category][subCategory](...params.split(","))
    } catch (error) {
        return "";
    }
}

const buildOne = () => {

}

const buildMany = () => {

}


/**
 * Hephaestus module
 */
export default Builder;