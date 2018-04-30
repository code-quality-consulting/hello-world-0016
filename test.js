/*jslint
    node
*/
const assert = require("assert");

function makeGreeting() {
    "use strict";
    return "Hello world!"; 
}

assert.strictEqual(makeGreeting(), "Hello world!");
console.log("Tests passing.");
