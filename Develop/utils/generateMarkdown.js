// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;

  if (license === 'MIT License') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  else if (license === 'Apache License 2.0') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else {
    licenseBadge = ''
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  
  if (license === 'MIT License') {
    licenseLink = "https://opensource.org/licenses/MIT";
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseLink = "https://opensource.org/licenses/MPL-2.0";
  }
  else if (license === 'Apache License 2.0') {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  }
  else {
    licenseLink = '';
  }
  return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection;

  if (license === 'MIT License') {
    licenseSection = "Licensed under MIT License";
  }  
  else if (license === 'Mozilla Public License 2.0') {
    licenseSection = "Licensed under Mozilla Public License 2.0";
  }
  else if (license === 'Apache License 2.0') {
    licenseSection = "Licensed under Apache License 2.0";
  }
  else {
    licenseSection = '';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
