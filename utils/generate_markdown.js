
//pulling liscense badge 
function licenseBadge(license){
 return `![GitHub license] (https://img.shields.io/badge/License-${license}-blue.svg)`
}
//marking down read me with user information
function generateMarkdown(data) {
 return `${licenseBadge(data.license)}
 # ${data.readmeName}

 
 ## Table of Contents
 * [Description](#description)
 * [Usage](#desription)
 * [Installation](#installation)
 * [Contributing](#contibuting)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Description
 ${data.description}
 ## Usage 
 ${data.usage}
 ## Installation
 ${data.installation}
 ## Contributing
 ${data.contribute}
 ## Liscense
 This project is liscensed by ${data.license}.
 ## Tests
 ${data.userTest}

 ##Questions
 If you have any questions please reach out to me at ${data.email}.

 Or connect with me through GitHub.
 ${data.gitHandle}

 
 `
}

module.exports = generateMarkdown;

