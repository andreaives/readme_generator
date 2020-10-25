//require files needed
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generate_markdown")



//description, installation instructions, usage information, contribution guidelines, and test instructions
//added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
const questions = [
  {
    //grabbing a name of the project from a user
    message: "Give your README a name.",
    name: 'readmeName'
  }, {
    // need creator github handle
    message: "What is your Github handle?",
    name: "gitHandle"
  }, {
    //getting creator email address
    message: "What is your email address?",
    name: "email"
  }, {
    //getting a description of the project from a user
    message: "Describe your project.",
    name: 'description'
  },{
    //getting the installation section information
    message: "Provide installation instructions:",
    name: 'installation'
  }, {
    //getting the section about usage information
    message: "What command should be used to run tests:",
    name: 'userTest'
  }, {
    // How can some one contribut to this repo
    message: "How can someone contribute to this repo?",
    name: "contribute"

  },{
    //list of liscense options
    type: "list",
    message: "Choose the license used:",
    choices: ["IBM", "ISC License", "MIT", "Mozilla", "none"],
    name: "license"
    
  }
]



// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data) 
};
// function to initialize program
function init() {
  //calling the questions to prompt user 
  inquirer.prompt(questions).then((response) => {
    console.log(response)
    console.log("writing to file")
    writeToFile("practice.md", generateMarkdown(response));

    
  })
}

// function call to start program
init();
