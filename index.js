//require files needed
var fs = require("fs")
var inquirer = require("inquirer")
var markdown = require("generate_markdown.js")

//need project title this is displayed as the title of the README


//description, installation instructions, usage information, contribution guidelines, and test instructions
//added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
const questions = [
 {
  type: "input",
  message: "Describe you project.",
  name: 'description'
 },
 {
  type: "input",
  message: "Installation instructions:",
  name: 'installation'
 },
 {
  type: "input",
  message: "Usage information:",
  name: 'usage'
 },
 {
  type : "input",
  message: "Tests:",
  name: 'tests'
 },

]

// array of questions for user




// function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
 //take in questions
 //pass in the response
 //generate response as data
 //call write to file function here 

}

// function call to initialize program
init();