const connection = require("./connections");

class Queries {
    constructor (connection) {
        this.connection = connection
    }
    findAllDepartments() {
        return this.connection.promise().query(
            "SELECT departments.id, departments.name FROM departments;"
        )
    }
    findAllRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title FROM roles;"
        )
    }
    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name FROM employees;"
        )
    }
}

module.exports = new Queries(connection)