const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
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
        type: 'input',
        message: 'Do you want to choose a license for this repo?',
        name: 'license',
        choices: [Academic Free License v3.0, Apache license 2.0, Artistic license 2.0,
            Boost Software License 1.0,
            BSD 2-clause "Simplified" license,
            BSD 3-clause "New" or "Revised" license,
            BSD 3-clause Clear license,
            Creative Commons license,
            Creative Commons Zero v1.0 Universal,
            Creative Commons Attribution 4.0,
            Creative Commons Attribution Share Alike 4.0,
            Do What The F*ck You Want To Public License,
            Educational Community License v2.0,
            Eclipse Public License 1.0,
            Eclipse Public License 2.0,
            European Union Public License 1.1,
            GNU Affero General Public License v3.0,
            GNU General Public License family,
            GNU General Public License v2.0,
            GNU General Public License v3.0,
            GNU Lesser General Public License family,
            GNU Lesser General Public License v2.1,
            GNU Lesser General Public License v3.0,
            ISC,
            LaTeX Project Public License v1.3c,
            Microsoft Public License,
            MIT,
            Mozilla Public License 2.0,
            Open Software License 3.0,
            PostgreSQL License,
            SIL Open Font License 1.1,
            University of Illinois/NCSA Open Source License,
            The Unlicense,
            zLib License
            ]
      },
      {
        type: 'input',
        message: 'How would you describe this repo?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How would you describe this repo?',
        name: 'description',
      },
  ])
  .then((response) => {
    const readMeTemplate = `#${response.title}

    ##Description
    ${response.description}
    
    ##Table of Contents
    
    ##Installation
    ${response.installation}
    
    ##Usage
    ${response.usage}
    
    ##Licensing
    ${response.license}
    
    ##Contributing
    ${response.contribute}
    
    ##Tests
    ${response.test}
    
    ##Questions
    Please contact me at ${response.github} or ${response.email}`;

    fs.writeFile('README.md', readMeTemplate, (err) => err ? console.log(err): console.log("Success!") );
  }
  );
