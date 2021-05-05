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
  return `# ${answers.title}

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
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## Questions
- View my [GitHub](${answers.github}) profile
- Email me at ${answers.email}
`;
};

module.exports = generateMarkdown;
