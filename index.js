const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager.js')
const Intern = require('./lib/intern')
const fs = require('fs')
const inquirer = require('inquirer')

const createMgmt = () => {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Team Manager name:"
    },
    {
        type: "input",
        name: "id",
        message: "Team Manager Employee ID (EID):"
    },
    {
        type: "input",
        name: "email",
        message: "Team Manager email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Team Manager office number:"
    },
])
.then((newMgmt) => {
    const { name, id, email, officeNumber } = newMgmt
    const newManager = new Manager(name, id, email, officeNumber)
    writeCards(newManager)
    menu();
})
}
const menu = () => {
    inquirer.prompt([
    {
        type: "checkbox",
        name: "createEmployee",
        message: "Add another employee or finish team?",
        choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish Team"]
    }
    ])
    .then((menuChoice) => {
        const { createEmployee } = menuChoice
        createEmployee == "Engineer" ? createEngineer() : createEmployee == "Intern" ? createIntern() : createEmployee == "Finish Team" ? loading() : menu();
    })
}

const createEngineer = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Engineer name:"
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID (EID):"
    },
    {
        type: "input",
        name: "email",
        message: "Engineer email:"
    },
    {
        type: "input",
        name: "github",
        message: "Engineer GitHub username:"
    },
])
.then((newDev) => {
    const { name, id, email, github } = newDev
    const newEngineer = new Engineer(name, id, email, github)
    writeCards(newEngineer)
    menu();
}) 
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern name:"
        },
        {
            type: "input",
            name: "id",
            message: "Intern ID (IID):"
        },
        {
            type: "input",
            name: "email",
            message: "Intern email:"
        },
        {
            type: "input",
            name: "school",
            message: "Current School:"
        },
    ])
    .then((newIn) => {
        const { name, id, email, school } = newIn
        const newIntern = new Intern(name, id, email, school)
        writeCards(newIntern)
        menu();
    }) 
}


const loading = () => { 
    console.log("Setting up team:")
    setTimeout(() => console.log("Creating HTML and Applying CSS"), 2000)
    setTimeout(() => console.log("One moment..."), 4000)
    setTimeout(() => writeClose(), 7000)
}

const writeClose = () => {
  fs.appendFile("./dist/index.html", 
          `</div>
          </div>
            <div class="hero-foot">
              <nav class="tabs">
                <div class="container">
                  WHAT A GREAT TEAM!
                </div>
              </nav>
            </div>
          </section>
    </body>
    </html>`, 
(err) => err ? console.error(err) : console.log('Success!'));
}

const writeCards = (member) => {
  fs.appendFile("./dist/index.html", 
`<div class="card column is-one-third">
<div class="card-image">
<figure class="image is-3by2">
  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <h1 id="name" class="is-4">${member.getName()}</h1>
    <h2 id="role" class="is-4">${member.getRole()}</h2>
    <p id="id" class="is-6">EID: ${member.getId()}</p>
  </div>
</div>

<div class="content">
  ${member.getRole() === "Manager" ? `Office #: ${member.officeNumber}` : member.getRole() === "Engineer" ? `${member.getGitHub()}` : member.getRole() === "Intern" ? `${member.getSchool()}`: console.log("oops")}
  <a>${member.getEmail()}</a>.
</div>
</div>
</div>`, 
    (err) => err ? console.error(err) : console.log('Success!'));
} 

const writeOpen = () => {
fs.appendFile("./dist/index.html", 
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Roster!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="../dist/style.css">
  </head>
<body>
    <section class="hero is-primary is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="../img/teamrosterlogo.PNG" height="3em" alt="Logo">
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container columns has-text-centered">`, 
            (err) => err ? console.error(err) : " ");
}

const init = () => {
  createMgmt();
  writeOpen();
}

init();