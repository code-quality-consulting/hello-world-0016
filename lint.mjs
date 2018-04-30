/*jslint
    node
*/
import jslint from "./jslint";
import fs from "fs";
const fileName = process.argv[2];

fs.readFile(fileName, "utf-8", function (error, fileText) {
    if (error) {
        throw error;
    }
    const lintedCode = jslint(fileText);
    if (lintedCode.ok === true) {
        console.log(fileName + " is okay.");
    }
    if (lintedCode.ok === false) {
        console.log(lintedCode.warnings);
    }
});
