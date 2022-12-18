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
}

module.exports = new Queries(connection)