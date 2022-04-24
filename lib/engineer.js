const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email)
        this.username = username
    }
getGitHub(){
    console.log(`http://github.com/${this.username}/`)
}
getRole(){
    console.log("Engineer")
}
} 

module.exports = Engineer