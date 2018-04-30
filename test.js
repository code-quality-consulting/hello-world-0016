/*jslint
    node
*/
const assert = require("assert");

function makeGreeting(name = "world") {
    return "Hello" + " " + name + "!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("Tests passing.");
