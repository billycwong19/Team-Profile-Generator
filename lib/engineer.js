const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email)
        this.username = username
    }
getGitHub(){
    return `GitHub: <a href="http://github.com/${this.username}/">${this.username}</a>`
}
getRole(){
    return "Engineer"
}
} 

module.exports = Engineer