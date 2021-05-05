// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "APACHE_2") {
    return "Licensed under the [Apache License] (http://www.apache.org/licenses/)";
  }
  if (license === "MIT") {
    return "Licensed under the [MIT License] (https://opensource.org/licenses/MIT).";
  }
  if (license === "Modified-BSD") {
    return "Licensed under the [Modified-BSD License] (https://www.gnu.org/licenses/license-list.html#ModifiedBSD)";
  }
  if (license === "Expat") {
    return "Licensed under the [Expat License] (https://www.apache.org/licenses/License-2.0)";
  }
  if (license === "None") {
    return "No License";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

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
