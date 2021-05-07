// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "APACHE_2") {
    return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "BSD-3.0") {
    return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "GPL-3.0") {
    return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)";
  }
  if (license === "None") {
    return "";
  }
};

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
  ${renderLicenseBadge(answers.license)}

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
