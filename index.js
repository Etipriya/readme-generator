// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [
//   {
//     name: "title",
//     type: "input",
//     message: "What is the title of your project?",
//     // reply: "$",
//   },
//   {
//     name: "licence",
//     type: "list",
//     message: "Please select your licence for this project.",
//     choices: ["APACHE_2.0", "MIT", "Modified-BSD", "Expat"],
//     //validate: validateInput("choices"),
//   },
//   {
//     name: "description",
//     type: "input",
//     message: "Please write your project description",
//     // reply:
//     //   "We are creating a README.md file which has multiple sections related to our project",
//   },
//   {
//     name: "installation",
//     type: "list",
//     message: "Have you installed npm and node index.js. Y or N ?",
//     choices: ["Y", "N"],
//   },
//   {
//     name: "usage",
//     type: "input",
//     message:
//       "When the app is running, do you answer all the questions Y or N ?",
//     // reply: "When the app is running answer all questions",
//   },
//   {
//     name: "contribution",
//     type: "input",
//     message: "Have you pulled a request and sort it out. Y or N ?",
//     // reply: "Open an issue or a pull request and I will sort it",
//   },
//   {
//     name: "testInfo",
//     type: "input",
//     message: "Are there any tests for this project Y or N ?",
//     // reply: "There are no tests for this app",
//   },
//   {
//     name: "github-profile",
//     type: "input",
//     message: "Please enter a link to your github profile",
//     //reply: "link to github profile",
//   },
//   {
//     name: "email-ID",
//     type: "input",
//     message: "Please enter your email-ID",
//     //reply: "Bob@gmail.com",
//   },
// ];

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
      choices: ["APACHE_2.0", "MIT", "Modified-BSD", "Expat"],
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
        "When the app is running, do you answer all the questions Y or N ?",
    },
    {
      name: "contribution",
      type: "input",
      message: "Have you pulled a request and sort it out. Y or N ?",
    },
    {
      name: "tests",
      type: "input",
      message: "Are there any tests for this project Y or N ?",
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
