Overview
This Employee Management System (EMS) is designed to manage and track employees, departments, titles, types, and statuses within an organization. It also calculates and displays information regarding employee retirements, including expected retirement dates, the time left until retirement, and current retirement statuses (Retired or Upcoming). The system is built using Node.js, Express, MongoDB, GraphQL, and React, providing a seamless user experience through a well-organized UI and efficient backend operations.
Key Features
●	Employee Management: CRUD (Create, Read, Update, Delete) operations on employee records.
●	Department Management: Manage different departments within the organization.
●	Title Management: Create, update, and delete job titles.
●	Type Management: Categorize employees into different types.
●	Status Management: Track the current status of employees (e.g., Active, Inactive).
●	Retirement Calculations: Automatically calculate retirement dates and categorize employees as either Retired or Upcoming retirements.
●	Filtering and Sorting: Filter employees by various criteria and sort by different attributes.
●	GraphQL API: Flexible API for querying and mutating data.
●	React Front-End: Responsive user interface built with React, styled using Bootstrap.
System Architecture
Backend
The backend is built with Node.js, Express, MongoDB, and GraphQL, and includes the following components:
●	GraphQL Resolvers: Handle queries and mutations for employees, departments, titles, types, and statuses.
●	Helper Functions:
○	calculateRetirementDate(dateOfBirth): Calculates the retirement date by adding 65 years to the date of birth.
○	calculateAge(dateOfBirth): Calculates the current age of the employee.
○	calculateTimeLeft(retirementDate): Calculates the time left until retirement.
○	
Front-End
The front-end is built with React and includes the following components:
●	App: Defines routes and layout.
●	Dashboard: Displays an overview of the organization.
●	ManageEmployees: Manages the list of employees, including CRUD operations and viewing detailed information.
●	UpcomingRetirements: Displays a list of employees with upcoming retirements and supports filtering by employee type.
Data Visualization
●	Pie Charts: Created using recharts to visualize employee distribution by department, title, type, and status.
Package Dependencies
●	Node.js: JavaScript runtime for building the backend server.
●	Express.js: Web framework for Node.js.
●	MongoDB: NoSQL database for storing data.
●	Mongoose: ODM library for MongoDB and Node.js.
●	GraphQL: Query language for APIs.
●	Apollo Server: GraphQL server implementation.
●	React: JavaScript library for building the user interface.
●	React Router: Library for routing in React applications.
●	Bootstrap: CSS framework for styling.
●	Axios: Promise-based HTTP client.
●	Recharts: Library for creating charts.
●	React Bootstrap: Bootstrap components built for React.
●	React Toastify: Library for displaying notifications.
●	Font Awesome: Icon library for adding icons to the UI.
Code Explanation
GraphQL Resolvers
●	Employees:
○	employees: Fetches all employees and calculates details like age, retirement date, time left until retirement, and retirement status.
○	employee: Fetches a specific employee by ID.
○	upcomingRetirements: Fetches employees with upcoming retirements within the next six months.
●	Departments, Titles, Types, and Statuses: Fetch respective entities from the database.
●	Mutations: Support CRUD operations for employees, departments, titles, types, and statuses.
React Components
●	App: Sets up routes and includes the main layout.
●	Dashboard: Displays total counts and pie charts for employees, departments, titles, types, and statuses.
●	ManageEmployees: Manages employee records, including filtering, sorting, and viewing details.
●	UpcomingRetirements: Lists employees with upcoming retirements, filtered by type.
Modals
●	Used for adding/editing employees and viewing employee details.


Here are examples of GraphQL Playground queries for adding, editing, and deleting an employee in your Employee Management System

1. Add Employee

mutation {
  createEmployee(
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1985-08-15",
    dateOfJoining: "2020-01-10",
    title: "Software Engineer",
    department: "Engineering",
    employeeType: "Fulltime",
    currentStatus: true
  ) {
    id
    firstName
    lastName
    dateOfBirth
    dateOfJoining
    title
    department
    employeeType
    currentStatus
  }
}
 


2. Edit Employee
mutation {
  updateEmployee(
    id: "EMPLOYEE_ID", # Replace with the actual employee ID
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1985-08-15",
    dateOfJoining: "2020-01-10",
    title: "Senior Software Engineer", # Updated title
    department: "Engineering",
    employeeType: "Fulltime",
    currentStatus: true
  ) {
    id
    firstName
    lastName
    dateOfBirth
    dateOfJoining
    title
    department
    employeeType
    currentStatus
  }
}


3. Delete Employee

mutation {
  deleteEmployee(id: "EMPLOYEE_ID") # Replace with the actual employee ID
}


