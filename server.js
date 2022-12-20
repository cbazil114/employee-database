require("console.table");
const inquirer = require('inquirer');
const queries = require("./db");

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
            case "Quit":
                quit();
                break;
        }
    })
}

function viewDepartments() {
    queries.findAllDepartments().then(([response]) => {
        console.log(response)
    }).then(() => questions())

}

function viewEmployees() {
    queries.findAllEmployees().then(([response]) => {
        console.log(response)
    }).then(() => questions())

}

function viewRoles() {
    queries.findAllRoles().then(([response]) => {
        console.log(response)
    }).then(() => questions())


}

function quit() {

}