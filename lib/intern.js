const Employee = require('../lib/employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
getSchool(){
    console.log(this.school)
}
getRole(){
    console.log("Intern")
}
} 

// function ask(){
// inquirer.prompt([
//     {
//         type: "text",
//         message: "Whats up?",
//         name: "ask",

//     },
// ])
// }

module.exports = Intern