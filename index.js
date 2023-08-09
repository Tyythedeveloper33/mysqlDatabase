const inquirer = require('inquirer');
const fs = require('fs');
const generateDatabase = require('./utils/generateDatabase');
const mysql2 = require('mysql2');


// connecting my database to inquirer 
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Basketball123$',
    database: 'corporation_db',
});
connection.connect((err)=>{
    if(err)throw err;
    console.log('inquirer connected to mysql database')
    promptuser()
   })

   // function to add department
   const addDepartment =()=>{
inquirer.prompt([
    {
        type: 'input',
        message:'what would you like to call the department?',
        name: 'departmentName'
    }
]).then((answers)=>{
 const departmentName = answers.departmentName;
 const query = 'INSERT INTO department (department_name) VALUES (?)';
 // 
 connection.query(query,[departmentName], (err)=>{
    if (err)throw err;
    console.table(`Department "${departmentName} added successfully`);
 
 // trying to get view department query to activate after adding department
    const query1 = 'SELECT * FROM department;';
    connection.query(query1,(err, results)=>{
        if (err)throw err;
        console.table(results)
    promptuser()
 })
})

   })
}
   // function for adding role
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What would you like to call the role title?',
            name: 'roleTitle'
        },
        {
            type: 'input',
            message: 'Enter the salary for the role:',
            name: 'roleSalary'
        },
        {
            type: 'input',
            message: 'Enter the department numbers id:',
            name: 'departmentId'
        }
    ]).then((answers) => {
        const roleTitle = answers.roleTitle;
        const roleSalary = parseFloat(answers.roleSalary);
        const departmentId = parseFloat(answers.departmentId);
        const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        connection.query(query, [roleTitle, roleSalary, departmentId], (err) => {
            if (err) {
                console.log('Error adding role:', err.message);
            } else {
                console.table(`Role "${roleTitle}" added successfully.`);
            }
            const query1 = 'SELECT * FROM role;';
            connection.query(query1,(err, results)=>{
                if (err)throw err;
                console.table(results)
                promptuser()
        });
    });
});
}

// Function to add an employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the first name of the employee:',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'Enter the last name of the employee:',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'Enter the role ID for the employee:',
            name: 'roleId'
        },
        {
            type: 'input',
            message: 'Enter the manager ID for the employee (if applicable):',
            name: 'managerId'
        }
    ]).then((answers) => {
        const firstName = answers.firstName;
        const lastName = answers.lastName;
        const roleId = parseInt(answers.roleId);
        const managerId = parseInt(answers.managerId);

        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [firstName, lastName, roleId, managerId], (err) => {
            if (err) {
                console.error('Error adding employee:', err.message);
            } else {
                console.log(`Employee "${firstName} ${lastName}" added successfully.`);
            }
            const query1 = 'SELECT * FROM employee;';
            connection.query(query1,(err, results)=>{
                if (err)throw err;
                console.table(results)
            promptuser();
        });
    });
});
}

// function for updating employee
const updateEmployeeRole = () => {
    // First, retrieve a list of employees to choose from
    const query = 'SELECT id, CONCAT(first_name, " ", last_name) AS employee_name FROM employee';
    connection.query(query, (err, employees) => {
        if (err) {
            console.error('Error retrieving employees:', err.message);
            promptuser();
            return;
        }

        // Prompt user to choose an employee
        inquirer.prompt([
            {
                type: 'list',
                message: 'Select an employee to update:',
                name: 'employeeId',
                choices: employees.map(employee => ({ name: employee.employee_name, value: employee.id }))
            },
            {
                type: 'input',
                message: 'Enter the new role ID for the employee:',
                name: 'newRoleId'
            }
        ]).then((answers) => {
            const employeeId = parseInt(answers.employeeId);
            const newRoleId = parseInt(answers.newRoleId);

            const updateQuery = 'UPDATE employee SET role_id = ? WHERE id = ?';
            connection.query(updateQuery, [newRoleId, employeeId], (updateErr) => {
                if (updateErr) {
                    console.error('Error updating employee role:', updateErr.message);
                } else {
                    console.log('Employee role updated successfully.');
                }
                promptuser();
            });
        });
    });
};



// view department function
   const viewDepartments = ()=>{
    const query = 'SELECT * FROM department;';
    connection.query(query,(err, results)=>{
        if (err)throw err;
        console.table(results)
        promptuser()
    })
    }
// view roles function
   const viewRoles= ()=>{
    const query = 'SELECT * FROM role;';
    connection.query(query,(err, results)=>{
        if (err)throw err;
        console.table(results)
        promptuser()
    })
    }
// view employee function
   const viewEmployees= ()=>{
    const query = 'SELECT * FROM employee;';
    connection.query(query,(err, results)=>{
        if (err)throw err;
        console.table(results)
        promptuser()
    
    })
    }
// prompt for choosin task option
const promptuser = () =>{
inquirer.prompt([
{
    type: 'list',
    message: 'What task would you like to do?',
    name: 'taskOption',
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    
},
// handlers to how to handle different choices
])
.then((answers)=>{
const selectedTask = answers.taskOption;

switch(selectedTask){
    case  "view all departments":
        viewDepartments();
        break;
    case  "view all roles":
        viewRoles();
        break;
    case  "view all employees":
        viewEmployees();
        break;
    case  "add a department":
        addDepartment();
        break;
    case  "add a role":
        addRole();
        break;
    case  "add an employee":
        addEmployee();
        break;
    case  "update an employee role":
        updateEmployeeRole();
        break;
        default:
            console.log('invalid option');
}
});



   

  };
  