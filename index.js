// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    reply: "",
  },
  {
    name: "licence",
    type: "choices",
    message: "What is your Github Licence?",
    choices: [
      "github.com/bob",
      "github.com/alice",
      "github.com/mike",
      "github.com/steve",
    ],
    validate: validateInput,
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
    name: "usage",
    type: "input",
    message: "Usage",
    reply: "When the app is running answer all questions",
  },
  {
    name: "contributing",
    type: "input",
    message: "contributing",
    reply: "Open an issue or a pull request and I will sort it",
  },
  {
    name: "tests",
    type: "input",
    message: "Testing",
    reply: "There are no tests for this app",
  },
  {
    name: "github profile",
    type: "input",
    message: "link to github profile",
    reply: "link to github profile",
  },
  {
    name: "email-ID",
    type: "input",
    message: "email-ID",
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
      reply: "",
    },
    {
      name: "licence",
      type: "choices",
      message: "What is your Github Licence?",
      choices: [
        "github.com/bob",
        "github.com/alice",
        "github.com/mike",
        "github.com/steve",
      ],
      validate: validateInput,
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
      name: "usage",
      type: "input",
      message: "Usage",
      reply: "When the app is running answer all questions",
    },
    {
      name: "contributing",
      type: "input",
      message: "contributing",
      reply: "Open an issue or a pull request and I will sort it",
    },
    {
      name: "tests",
      type: "input",
      message: "Testing",
      reply: "There are no tests for this app",
    },
    {
      name: "github profile",
      type: "input",
      message: "link to github profile",
      reply: "link to github profile",
    },
    {
      name: "email-ID",
      type: "input",
      message: "email-ID",
      reply: "Bob@gmail.com",
    },
  ];

  const answers = await getAnswersFromQuestions(questions);
  handleAnswers(answers);
};

// Function call to initialize app
init();
