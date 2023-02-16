const fs = require('fs');
const inquirer = require('inquirer');

// main inputs for the readme - title - description - usage - contributing - 
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your cool project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide names of all who contributed to this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['MIT', 'GNU', 'Apache', 'Other'],
  },

  // email and github will appear in questions 

  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
])

  // badges for different licenses
  .then((answers) => {
    let licenseBadge = '';

    if (answers.license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (answers.license === 'GNU') {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (answers.license === 'Apache') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else {
      licenseBadge = '';
    }


    // text and writing of actual readme file
    const readmeContent = `
# ${answers.title}

${licenseBadge}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

If you have any questions, please contact me using the following info:

- [GitHub](https://github.com/${answers.github})
- [Email](${answers.email})
`;

    // Makes the title of the readme the project file
    const fileName = `${answers.title.toLowerCase().split(' ').join('-')}.md`;


    // writing of file and console log telling you the readme has been created successfully 
    fs.writeFile(fileName, readmeContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md file created successfully!');
      }
    });
  })
