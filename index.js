//require files needed
var fs = require("fs")
var inquirer = require("inquirer")
var markdown = require("./generate_markdown")
// const { listenerCount } = require("process")
const path = require("path")



//description, installation instructions, usage information, contribution guidelines, and test instructions
//added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
const questions = [
 {
  //grabbing a name of the project from a user
  type: "input",
  message: "Give your README a name.",
  name: 'readmeName'
 },{
  //getting a description of the project from a user
  type: "input",
  message: "Describe you project.",
  name: 'description'
 },
 {
  //getting the installation section information
  type: "input",
  message: "Installation instructions:",
  name: 'installation'
 },
 {
  //getting the section about usage information
  type: "input",
  message: "Usage information:",
  name: 'usage'
 },
 {
  type : "input",
  message: "Tests:",
  name: 'tests'
 },
 {
  //list of liscense options
  type: "list",
  message: "Choose the license used:",
  name: "license",
  choices: ["IBM","ISC License","MIT", "Mozilla","none"]
 }
]



// function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(process.cwd(),fileName),data)
 //(fileName, data)
}
// function to initialize program
function init() {

 //calling the questiosn to prompt user 
 inquirer.prompt(questions).then(response =>{
 //pass in the response
  //generate response as data
  //call write to file function here 
  writeToFile("practiceReadme.md", markdown({...response}))


})

}

// function call to initialize program
init();