const fs = require('fs');
const inquirer = require('inquirer');

let licenseInfo;

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
        message: 'How does one install this repo?',
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
            '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
            '[![Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            '[![BSD 2-Clause License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            '[![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            '[![CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
            '[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
            '[![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
            '[![CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)',
            '[![CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)',
            '[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)',
            '[![CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)',
            '[![Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            '[![GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
            '[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            '[![AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
            '[![LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
            '[![FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)',
            '[![IBM Public License 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
            '[![ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            '[![The MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            '[![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            '[![Open Data Commons Attribution License](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
            '[![Open Database License](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
            '[![Public Domain Dedication License](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
            '[![The Perl License](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
            '[![SIL Open Font License 1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
            '[![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
            '[![The Do What the Fuck You Want to Public License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
            '[![Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'],
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

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
Please follow my work at ${response.github} and reach out with any questions - ${response.email}`;

    fs.writeFile('README.md', readMeTemplate, (err) => err ? console.log(err): console.log('Success!') );
    }
  );