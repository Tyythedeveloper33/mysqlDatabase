
# 12 SQL: Employee Tracker

## Description

Welcome to the SQL: Employee Tracker, a command-line application built using Node.js, Inquirer, and MySQL. This application provides an intuitive way for business owners to manage departments, roles, and employees within their company. Keep your organization organized and plan effectively with the help of this powerful tool.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)
- [Contact](#contact)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
 A command-line application, that accepts user input
WHEN user starts the application, THEN user is presented with the following options: view all departments, view all roles,  view all employees, add a department, add a role, add an employee, and update an employee role
WHEN user chooses to view all departments, THEN user is presented with a formatted table showing department names and department ids
WHEN user choses to view all roles, THEN user is presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN user choses to view all employees, THEN user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN user choses to add a department, THEN user is prompted to enter the name of the department and that department is added to the database
WHEN user choses to add a role, THEN user is prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN user choses to add an employee, THEN user is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN user choses to update an employee role, THEN user is prompted to select an employee to update and their new role and this information is updated in the database
```

## Mock-Up

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://drive.google.com/file/d/1FnfpPru3Q_4Qs7OO0ShQMiatn9PKMSdX/view)

## Getting Started

To begin using the SQL: Employee Tracker application, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Configure your MySQL database settings in the `.env` file.
4. Run the application using `node index.js` from the command line.

## Usage

1. Upon starting the application, you will be presented with a menu of options.
2. Choose an option to view departments, roles, employees, or to perform various actions such as adding a department, role, or employee, and updating an employee's role.
3. Follow the prompts to enter necessary information or make selections.
4. The application will interact with the MySQL database to perform the requested action and display the results.

## Built With

- Node.js
- Inquirer
- MySQL2

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please contact me at kingwebbe@gmail.com or @tyythedeveloper33 on github
```

Feel free to adjust any details or wording as needed. If you have any further changes or additions, please let me know!
