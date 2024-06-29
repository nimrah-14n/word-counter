#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        message: "Enter your sentence to count the word:",
        type: "input"
    }
]);
var words = answers.sentence.trim().split(" ");
console.log(words);
console.log("Your sentence word count is ".concat(words.length));
