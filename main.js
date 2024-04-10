#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// dummy currency
let currency = {
    "USD": 1,
    "EUR": 0.9,
    "CAD": 1.3,
    "AUD": 1.65,
    "JPY": 113,
    "KWD": 454,
    "SAR": 36.9,
    "PKR": 280,
};
console.log(chalk.magenta.bold("\n \t Welcome to 'Siddiqa Badar' CLI Currency converter\n")); // \t mean space
//Select currency to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.green("Select the currency to convert from:"),
        choices: ["USD", "EUR", "CAD", "AUD", "JPY", "KWD", "SAR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: ["USD", "EUR", "CAD", "AUD", "JPY", "KWD", "SAR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green("Enter the amount to convert"),
    }
]);
// currency conversion  dynamically
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
// conversion by Formula dynamically
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//Display converted amount
console.log(chalk.redBright.bold(`converted Amount = ${convertedAmount}`)); // print variable value
