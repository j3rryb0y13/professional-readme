// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === 'Apache 2.0') {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else {
    return '';
  }
}

// Function to return the license link based on the chosen license
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)";
  } else if (license === 'Apache 2.0') {
    return "[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function to return the license section of README based on the chosen license
function renderLicenseSection(license, userName) {
  if (license === "MIT") {
    return `Copyright 2024 ${userName}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "Apache License 2.0") {
    return `Please visit the following link to view Apache License 2.0 details.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}  
${renderLicenseLink(data.license)}  
${renderLicenseSection(data.license, data.github)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
