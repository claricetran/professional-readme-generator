// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "Enter the title of your project.",
	},
	{
		type: "input",
		name: "description",
		message:
			"Provide a short description explaining the what (What was your motivation?/What problem did you solve?/What did you learn?), why (Why did you build this project?), and how of your project.",
	},
	{
		type: "input",
		name: "install",
		message:
			"What are the installation steps for this project? (If multiple steps, please format as like so: 1. Step one.\\n2. Step two.)",
	},
	{
		type: "input",
		name: "usage",
		message: "Provide instructions and examples for use.",
	},
	{
		type: "confirm",
		name: "usageImageCheck",
		message:
			"Did you want to use an image in your usage section? (Note that you may only insert one through this method)",
	},
	{
		type: "input",
		name: "usageImage",
		message: "What is the filepath to your image?",
		when(answers) {
			return answers.usageImageCheck;
		},
	},
	{
		type: "list",
		name: "license",
		message: "What type of license would you like to include?",
		choices: [
			"None",
			"Apache",
			"Boost",
			"BSD",
			"Creative Commons Zero v1.0 Universal",
			"Creative Commons Attribution 4.0 International",
			"Creative Commons Attribution Share Alike 4.0 International",
			"Eclipse Public License 2.0",
			"GNU General Public License v3.0",
			"ISC",
			"MIT",
			"Mozilla",
			"Open Data Commons (ODbL)",
			"SIL Open Font License 1.1",
			"Unlicense",
			"Zlib",
		],
	},
	{
		type: "input",
		name: "contributing",
		message: "Enter how people can contribute.",
	},
	{
		type: "input",
		name: "tests",
		message: "Enter any tests.",
	},
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub username.",
	},
	{
		type: "input",
		name: "email",
		message: "Enter an email that people can reach out to for questions.",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(`./output/${fileName}`, data);
}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			writeToFile(`${answers.title}_README.md`, generateMarkdown(answers));
		})
		.then(() => console.log("README.md has been generated"))
		.catch((err) => console.error(err));
}

// Function call to initialize app
init();
