// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your repo?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe this repo?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install this repo?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does one use this repo?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Which license do you want to apply to this repo?',
        name: 'licensing',
        choices: 
            ['None',
            'Apache license 2.0', 
            'Boost Software License 1.0',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            "Creative Commons Zero",
            "Creative Commons Attribution 4.0 International",
            "Creative Commons Attribution-ShareAlike 4.0 International",
            "Attribution-NonCommercial 4.0 International",
            "Attribution-NoDerivatives 4.0 International",
            "Attribution-NonCommercial-ShareAlike 4.0 International",
            "Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License v3.0",
            "IBM Public License Version 1.0",
            "ISC License",
            "The MIT License",
            "Mozilla Public License 2.0",
            "Attribution License (BY)",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)",
            "The Perl License",
            "The Artistic License 2.0",
            "SIL Open Font License 1.1",
            "The Unlicense",
            "The Do What The Fuck You Want To Public License",
            "The zLib/libpng License"],
    },
    {
        type: 'input',
        message: 'How can someone contribute to this repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can someone test this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is an email address you can be reached at for questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL to find this and other repos at?',
        name: 'github',
        },
];

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

inquirer
  .prompt(questions)
  .then((response) => {
    const readMeTemplate = 
    
`# ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Licensing
${response.licensing}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
Please follow my work at ${response.github} and reach out with any questions - ${response.email}`;

    fs.writeFile('README.md', readMeTemplate, (err) => err ? console.log(err): console.log('Success!') );
    // renderLicenseBadge(response.licensing);
  }
  );

// function renderLicenseBadge () {
//     if (response.licensing = 'Apache license 2.0'){
//         let licenseInfo = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
//         licenseInfo
//     }
// }