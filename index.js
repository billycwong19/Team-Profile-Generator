const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager.js')
const Intern = require('./lib/intern')
const fs = require('fs')
const generateHTML = require('./lib/generateHTML')
const inquirer = require('inquirer')

const team = []

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
    team.push(newManager)
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
        createEmployee == "Engineer" ? createEngineer() : createEmployee == "Intern" ? createIntern() : createEmployee == "Finish Team" ? loading() : console.log("Please Select an option");
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
    team.push(newEngineer)
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
        team.push(newIntern)
        menu();
    }) 
}

const loading = () => { 
    console.log("Setting up team")
    setTimeout(() => console.log("Creating HTML and Applying CSS"), 3000)
    setTimeout(() => console.log("One moment..."), 6000)
    setTimeout(() => write(), 10000)

}

const write = () => fs.writeFile("./dist/index.html", generateHTML.generator(team), (err) => err ? console.error(err) : console.log('Success!'));

const init = () => createMgmt();

init();