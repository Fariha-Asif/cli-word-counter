#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright("\n\t Welcome to Fariha's word counter application.\n"));

let condition2 = true;
while (condition2) {
  const options = await inquirer.prompt({
    name: "Selection",
    type: "list",
    message: "Kindly select what you want to count?",
    choices: ["Word Count", "Alphabets count", "Sentence count", "Exit"],
  });
  if (options.Selection == "Word Count") {
    const answer1: {
      sentence: string;
    } = await inquirer.prompt([
      {
        name: "sentence",
        type: "input",
        message: chalk.red.italic(
          "Kindly write your sentence/paragraph which you want to count:"
        ),
      },
      {
        name: "again",
        type: "confirm",
        message: chalk.red("Do you want to count again?"),
        default: "yes",
      }
    ]);
    const words = answer1.sentence.trim().split(" ");

    console.log(chalk.blue.italic(words));

    console.log(
      chalk.green.italic(
        "Your sentence word count is:" + chalk.yellow(words.length)
      )
    );
  }
  if (options.Selection == "Alphabets count") {
    const answer2 = await inquirer.prompt([{
      name: "sentence",
      type: "input",
      message: chalk.red.italic(
        "Kindly write your sentence which you want to count:"
      ),
    },  {
      name: "again",
      type: "confirm",
      message: chalk.red("Do you want to count again?"),
      default: "yes",
    }]);

    const word = answer2.sentence.trim().split("");

    console.log(chalk.blue.italic(word));

    console.log(
      chalk.green.italic(
        "Your sentence alphabet count is:" + chalk.yellow(word.length)
      )
    );
  }
  if (options.Selection == "Sentence count") {
    const answer2 = await inquirer.prompt([{
      name: "sentence",
      type: "input",
      message: chalk.red.italic(
        "Kindly write your paragraph which you want to count:"
      ),
    }, {
      name: "again",
      type: "confirm",
      message: chalk.red("Do you want to count again?"),
      default: "yes",
    }]);

    const word = answer2.sentence.trim().split(".");

    let word1 = word.length - 1

    console.log(chalk.blue.italic(word));

    console.log(
      chalk.green.italic("Your sentence count is:" + chalk.yellow(word1))
    );
  } else if (options.Selection == "Exit") {
    await inquirer.prompt({
      name: "Exit",
      type: "confirm",
      message: "Are you sure you want to Exit?",
      default: "yes",
    });
    condition2 = false;
    console.log(chalk.blue.italic("Thank you for using my application."));
  }
}
