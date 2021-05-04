// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
  return `# ${answers.projectTitle}

  ## Description 
  ${answers.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  whats the installation process to install npm and node index.js locally?
  ${answers.installation}

  ## Usage
  How you use this application?
  ${answers.usage}
  //When the app is running answer all questions
  // After all questions view generated README markdown file

  ## License
  //render badge name here
  ${renderLicenceBadge(answers.license)}

  ## Contributing
  ${answers.contribution}
  //Open an issue or a pull request and I will sort it.

  ## Tests
  (question 7 - input)
  There are no tests for this app

  ## Questions
  ${answers.link}
  ${answers.emailID}
- View my [GitHub](https://github.com/surajverma2587) profile (question 8 - input)
- Email me at bob@email.com (question 9 - input)

`;
};

module.exports = generateMarkdown;
