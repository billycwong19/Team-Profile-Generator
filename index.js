// importing external modules
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager.js')
const Intern = require('./lib/intern')
const fs = require('fs')
const inquirer = require('inquirer')
//asks the user for information about team manager and creates a class of Manager.
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
// not only does it create a new class of Manager, it also immediately write a new card to the HTML file by calling the writeCards function and continues on to the menu.
.then((newMgmt) => {
    const { name, id, email, officeNumber } = newMgmt
    const newManager = new Manager(name, id, email, officeNumber)
    writeCards(newManager)
    menu();
})
}
// the menu asks the user if they would like to add another employee or finish team and depending on feedback the .then statement routes the input to another set of inquirer prompts or finishes the team. 
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
// createEngineer asks a set of prompts and writes a new card as when called, but also asks the user for the github username of the engineer being created
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
// createIntern asks a series of prompts including the school the intern is currently enrolled and then immediately creates a card by calling writeCards
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
// loading is part fun part closure. it pretends like its creating an HTML file and applying CSS, by setTimeout at different intervals until it calls writeClose
const loading = () => { 
    console.log("Setting up team:")
    setTimeout(() => console.log("Creating HTML and Applying CSS"), 2000)
    setTimeout(() => console.log("One moment..."), 4000)
    setTimeout(() => writeClose(), 7000)
}
// writeClose write the bottom of the HTML file being created. right after the cards that are being created dynamically
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
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
    </html>`, 
(err) => err ? console.error(err) : console.log('Success!'));
}
// writeCards dynamically generates employee cards when called. it is passed the newly created member and uses class methods to access the member properties to appropriately write icons and card content that correspond to that member's role, name, id, email, and some.  
const writeCards = (member) => {
  fs.appendFile("./dist/index.html", 
`<div class="card column is-one-fourth">
<div class="card-image">
<figure class="image is-2by1">
  <img src="../img/thetechco.PNG" alt="company logo">
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <h1 id="name" class="is-4">${member.getName()}</h1>
    <h2 id="role" class="is-4"><ion-icon name="${member.getRole() === "Manager" ? "people-circle-outline" : member.getRole() === "Engineer" ? "leaf-outline" : member.getRole() === "Intern" ? "school-outline" : console.log("oops")}"></ion-icon> ${member.getRole()}</h2>
    <p id="id" class="is-6"><ion-icon name="id-card-outline"></ion-icon> (EID) : ${member.getId()}</p>
  </div>
</div>

<div class="content">
  <p>${member.getRole() === "Manager" ? `Office #: ${member.officeNumber}` : member.getRole() === "Engineer" ? `${member.getGitHub()}` : member.getRole() === "Intern" ? `${member.getSchool()}`: console.log("oops")}</p>
  <a href="mailto:${member.getEmail()}">${member.getEmail()}</a>
</div>
</div>
</div>`, 
    (err) => err ? console.error(err) : console.log('Success!'));
} 
//this writes the <head>, the beginning of the <body>, and the container for the cards, but stops there. 
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
          <div class="container columns is-multiline">`, 
            (err) => err ? console.error(err) : " ");
}
// initializes application and writes the beginning of our html document down to where the cards would start. 
const init = () => {
  createMgmt();
  writeOpen();
}
// ¿<*÷~innit~÷*>?
init();