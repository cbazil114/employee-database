USE employees_db;

INSERT INTO departments (name) VALUES ("Engineering"),("Math");

INSERT INTO roles (title, salary, department_id) 
VALUES ("Developer", 100000, 1),("Teacher", 80000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL),("Amanda", "Doe", 2, 1);