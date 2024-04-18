#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers : {
    sentence: string
} = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.red.italic("Kindly write your sentence which you want to count:")
})

const words = answers.sentence.trim().split(" ");

console.log(chalk.blue.italic(words));

console.log(chalk.green.italic(`Your sentence word count is: ${words.length}`));
