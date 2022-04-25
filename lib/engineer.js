const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email)
        this.username = username
    }
getGitHub(){
    return `GitHub Profile: http://github.com/${this.username}/`
}
getRole(){
    return "Engineer"
}
} 

module.exports = Engineer