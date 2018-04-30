/*jslint
    node
*/
const assert = require("assert");

function makeGreeting() {
    "use strict";
    return undefined; 
}

assert.strictEqual(makeGreeting(), "Hello world!");
console.log("Tests passing.");
