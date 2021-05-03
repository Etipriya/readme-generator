// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    reply: "Generated README.md",
  },
  {
    name: "licence",
    type: "choices",
    message: "What is your Github Licence?",
    reply: "Bob@gmail.com",
  },
  {
    name: "description",
    type: "input",
    message: "Write your project description",
    reply:
      "We are creating a README.md file which has multiple sections related to our project",
  },
  {
    name: "installation",
    type: "input",
    message: "Installation",
    reply: "npm install node index.js",
  },
  {
    name:
    type: "input",
    message: "Usage",
    reply: "When the app is running answer all questions",
  },
  {
    type: "input",
    message: "Contributing",
    reply: "Open an issue or a pull request and I will sort it",
  },
  {
    type: "input",
    message: "Testing",
    reply: "There are no tests for this app",
  },
  {
    type: "input",
    message: "Github profile",
    reply: "Link to github profile",
  },
  {
    type: "input",
    message: "emailID",
    reply: "Bob@gmail.com",
  },
];

// function to handle your answers
const handleAnswers = answers => {
  console.log(answers);
};

// generic function to get answers for questions
const getAnswersFromQuestions = async questions => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "What is your name?",
      reply: "Bob",
    },
  ];

  const answers = await getAnswersFromQuestions(questions);
  handleAnswers(answers);
};

// Function call to initialize app
init();
