// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// function to handle your answers
const handleAnswers = answers => {
  const markdown = generateMarkdown(answers);
  console.log(markdown);
};

// generic function to get answers for questions
const getAnswersFromQuestions = async questions => {
  const answers = await inquirer.prompt(questions);
  return answers;
  //.then (answers) => {
  //   console.log("questions", "answers"),
  // }
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const questions = [
    {
      name: "title",
      type: "input",
      message: "What is the title of your project?",
    },
    {
      name: "license",
      type: "list",
      message: "Please select your licence for this project.",
      choices: ["APACHE_2.0", "MIT", "Modified-BSD", "Expat", "None"],
    },
    {
      name: "description",
      type: "input",
      message: "Please write your project description",
    },
    {
      name: "installation",
      type: "input",
      message:
        "What installation instructions would you give for your application?",
    },
    {
      name: "usage",
      type: "input",
      message:
        "When the app is running, do you answer all the questions Y or N?",
    },
    {
      name: "contribution",
      type: "input",
      message:
        "What contribution have you made to pull a request and sort it out?",
    },
    {
      name: "tests",
      type: "input",
      message: "Please give information on the test for your application.",
    },
    {
      name: "github",
      type: "input",
      message: "Please enter a link to your github profile",
    },
    {
      name: "email",
      type: "input",
      message: "Please enter your email-ID",
    },
  ];

  const answers = await getAnswersFromQuestions(questions);
  handleAnswers(answers);
};

// Function call to initialize app
init();
