require("console.table");
const inquirer = require('inquirer');
const { connection } = require("./db");
const queries = require("./db");
const { connect } = require("./db/connections");

questions();

function questions() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View Employees", "View Departments", "View Roles", "Add Employees", "Add Departments", "Add Roles", "Quit"]
        }
    ]).then(response => {
        switch (response.choice) {
            case "View Employees":
                viewEmployees();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "Add Employees":
                addEmployees();
                break;
            case "Add Departments":
                addDepartments();
                break;
            case "Add Roles":
                addRoles();
                break;
            case "Update Employees":
                updateEmployees();
                break;
            case "Quit":
                connection.end();
                break;
        }
    })
}

function viewDepartments() {
    queries.findAllDepartments().then(([response]) => {
        console.table(response)
    }).then(() => questions())

}

function viewEmployees() {
    queries.findAllEmployees().then(([response]) => {
        console.table(response)
    }).then(() => questions())

}

function viewRoles() {
    queries.findAllRoles().then(([response]) => {
        console.table(response)
    }).then(() => questions())
}

const addDepartments = () => {
    inquirer.prompt({
        type: "input",
        name: "addedDepartments",
        message: "What is the name of the new department?",
        validate: (input => {
            if (!input) {
                return "Please enter a department name."
            } else {
                return true;
            }
        })
    }).then
}

const addRoles = () => {
    inquirer.prompt({
        type: "input",
        name: "addedRoles",
        message: "What is the name of the new role?"
    })
}

const addEmployees = () => {
    inquirer.prompt([{
        type: "input",
        name: "addedFirstName",
        message: "What is the first name of the new emnployee?"
    },
    {
        type: "input",
        name: "addedLastName",
        message: "What is the last name of the new emnployee?"
    },
    ])
}

const updateEmployees = () => {
    inquirer.prompt({
        type: "input",
        name: "updateEmpId",
        message: "What is the employee ID you would like to update?"
    })
}
