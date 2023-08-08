INSERT INTO department (department_name)
VALUES ("finance"),
       ("human resource"),
       ("management"),
       ("sales"),
       ("marketing"),
       ("accounting"),
       ("customer service");

INSERT INTO role (title, department_id, salary)
VALUES ("CFO", 1, 89000),
       ("Payroll Processor", 2, 47096),
       ("Sales Trainer", 3, 66763),
       ("Sales associate", 4, 31500),
       ("Analytics Specialist", 5, 71860),
       ("Bookkeeper", 6, 44058),
       ("Customer Service Representative", 7, 37402);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Saige", "Fuentes", 5, 1),
       ("Bowen", "Higgins", 3, 2),
       ("Leighton", "Kramer", 6, 3),
       ("Amelie", "Griffith", 4, 4),
       ("Marceline", "Avila", 2, 5),
       ("Jaylen", "Blackwell", 1, 6),
       ("Kylan", "Gentry", 7, 7);

