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
            "SELECT* FROM employees;"
        )
    }
}

module.exports = new Queries(connection)