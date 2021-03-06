// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function to handle your answers
const handleAnswers = answers => {
  const markdown = generateMarkdown(answers);
  return markdown;
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
function createReadme(markdown) {
  //fs
  fs.writeFile("./generated-README.md", markdown, err => {
    if (err) {
      console.log(err);
    }
    console.log("Your README has been generated");
  });
}

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
      message: "What license did you used?",
      choices: ["APACHE_2.0", "MIT", "BSD-3.0", "GPL-3.0", "None"],
    },
    {
      name: "description",
      type: "input",
      message: "Please write your project description",
    },
    {
      name: "installation",
      type: "input",
      message: "What are the installation instructions to be followed?",
    },
    {
      name: "usage",
      type: "input",
      message: "How do you use your application?",
    },
    {
      name: "contribution",
      type: "input",
      message: "How can someone contribute to your project?",
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
  const generatedMarkdown = handleAnswers(answers);
  createReadme(generatedMarkdown);
};

// Function call to initialize app
init();
