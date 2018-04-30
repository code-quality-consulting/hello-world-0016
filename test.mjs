/*jslint
    node
*/
import assert from "assert";
import {makeGreeting} from "./greet";

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("Tests passing.");
