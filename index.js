const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')


const billy = new Employee("William","12", "billycwong19@gmail.com")

billy.getRole();
billy.getId()
billy.getName()
billy.getEmail()

const tom = new Engineer("Tom", "15", "tom@myspace.com", "2")
tom.getRole();
tom.getId()
tom.getName()
tom.getEmail()
