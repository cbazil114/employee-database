const connection = require("./connections");

class Queries {
    constructor (connection) {
        this.connection = connection
    }
    findAllDepartments() {
        return this.connection.promise().query(
            "SELECT  * FROM departments;"
        )
    }
    findAllRoles() {
        return this.connection.promise().query(
            "SELECT roles.title, roles.salary, departments.name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;"
        )
    }
    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
        )
    }
}

module.exports = new Queries(connection)