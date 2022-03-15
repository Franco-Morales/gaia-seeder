import fs from "fs";
import path from "path";

import { displayText } from "./display";


const terraformValidation = (jsonPathFile) => {
    let aux = {
        status: false,
        data: []
    }

    try {
        const extName = path.extname(jsonPathFile);

        if(extName === ".json") {
            const rawDataType = fs.readFileSync(jsonPathFile);
            const jsonStructure = JSON.parse(rawDataType);
        
            if(jsonStructure.length) {
                jsonStructure.forEach( obj => {

                    const auxTypeValidated = validType(obj.type);
                    const auxCollValidated = validCollectionName(obj.collection)
                    const auxQuantityValidated = validQuantity(obj.quantity)
                    
                    let collName = (obj.collection === undefined || obj.collection === "") && "collection";

                    if(auxTypeValidated.status && auxCollValidated.status && auxQuantityValidated.status) {
                        aux = {
                            status: true,
                            data: jsonStructure
                        }
                    } else {
                        displayText("red",`${collName} : \n`);
                        [...auxTypeValidated.errors, auxCollValidated.errors, auxQuantityValidated.errors].forEach( e => {
                            displayText("red", `\t${e}`);
                        });
                    }
                });
            } else {
                displayText("red","Empty json file");
            }
        } else {
            displayText("red","Invalid format file. Only .json")
        }

        return aux;

    } catch (error) {
        displayText("red","No such file or directory")
        return {
            ...aux,
            status: false
        }
    }
}


const validType = (typeObj) => {
    let errorMsgArr = [];
    let arrTypeObj = Object.keys(typeObj);
    let regexMatch = new RegExp("[a-z]*[.]{1}[a-z]*[|]?([A-Za-z0-9-:.]*[,]*)*");

    if(arrTypeObj === undefined || arrTypeObj === null) errorMsgArr.push("Mising property 'type'");

    if (arrTypeObj.length === 0) errorMsgArr.push("'type' should not be an empty object");

    if( arrTypeObj.every( key => typeof typeObj[key] !== "string" ) ) errorMsgArr.push("'type.property' should be a string");

    if( !arrTypeObj.every(key => regexMatch.test(typeObj[key]) ) ) errorMsgArr.push("'type.property:value' incorrect string format. See docs for more info");

    return {
        status: errorMsgArr.length === 0,
        errors: [ ...errorMsgArr ]
    }
}

const validCollectionName = (name) => {
    let errorMsgArr = [];

    if(name === undefined || name === null) errorMsgArr.push("Mising property 'collection'");

    if(typeof name !== "string") errorMsgArr.push("'collection' must be a string");

    if(name === "") errorMsgArr.push("'collection' should not be an empty string");

    return {
        status: errorMsgArr.length === 0,
        errors: [ ...errorMsgArr ]
    }
}

const validQuantity = (quantity) => {
    let errorMsgArr = [];

    if(quantity === undefined || quantity === null) errorMsgArr.push("Mising property 'quantity'");

    if(typeof quantity !== "number") errorMsgArr.push("'quantity' must be a string");

    if(quantity <= 0) errorMsgArr.push("'quantity' should not be zero or negative");

    return {
        status: errorMsgArr.length === 0,
        errors: [ ...errorMsgArr ]
    }
}


/**
 * Minerva module
 */
export { terraformValidation };