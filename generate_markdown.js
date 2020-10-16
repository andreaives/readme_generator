
//pulling liscense badge 
function licenseBadge(userLiscense){
 return `![GitHub license] (https://img.shields.io/badge/License-${userLiscense}-blue.svg)`
}
//marking down reaad me with user information
function generateMarkdown(data) {
 return `${renderLicenseBadge(data.license)}
 # ${data.readmeName}

 ## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Contributing](#contibuting)
 * [Tests](#tests)
 *[Questions](#questions)
 
 ## Description
 ${data.description}
 
 
 
 
 `

}

module.exports = generateMarkdown;

// create template here 