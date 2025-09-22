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
Frequently Asked Questions (FAQ)
General FAQs
1.	What does the calculateRetirementDate function do?
○	It calculates the retirement date by adding 65 years to the employee's date of birth.
2.	How does the system determine if an employee is retired or has an upcoming retirement?
○	It compares the calculated retirement date with the current date. If the retirement date is in the past, the employee is considered retired; otherwise, it is considered an upcoming retirement.
3.	What happens if an employee's status is active when trying to delete their record?
○	The system throws an error and prevents the deletion, as active employees cannot be deleted.
4.	How are employee records sorted in the ManageEmployees component?
○	Employee records can be sorted by various attributes by clicking on the corresponding table headers.
5.	How is data fetched from the backend to the front-end?
○	Data is fetched using GraphQL queries sent via Axios from the React components.
6.	What are the different types of entities managed by this system?
○	The system manages Employees, Departments, Titles, Types, and Statuses.
7.	How does the system handle errors when fetching data?
○	Errors are caught in the try/catch blocks, and error messages are displayed using React-Toastify.
8.	What visualization library is used to display charts in the Dashboard component?
○	The system uses recharts to display pie charts for visualizing employee data.
Code-Related FAQs
1.	Why do we use new Date() when calculating retirement dates or age?
○	new Date() is used to get the current date and time or to create a date object based on a specific date. It helps in performing accurate date calculations such as determining retirement dates or calculating the current age.
2.	What does await Employee.find() do in the employees resolver?
○	await Employee.find() is an asynchronous operation that fetches all employee records from the MongoDB database using Mongoose. It ensures that the function waits for the data to be retrieved before proceeding.
3.	Why is there a need to map over the results in the employees resolver?
○	The map function is used to iterate over each employee and calculate additional properties such as age, retirement date, time left until retirement, and retirement status. This enriches the data before returning it to the client.
4.	What is the purpose of the fetchData function in the React components?
○	fetchData is used to make an API request to the GraphQL server, retrieve data, and update the component’s state with the fetched data. It handles asynchronous data fetching and error management.
5.	How does the useEffect hook function in these React components?
○	useEffect is a React hook that runs a side effect (such as data fetching) after the component mounts or when specific dependencies change. In this system, it is primarily used to fetch initial data from the API when the component is first rendered.
6.	What is the role of GraphQL in this system?
○	GraphQL provides a flexible API for querying and mutating data. It allows the client to specify exactly what data they need, minimizing over-fetching and making the API more efficient.
7.	Why do we use axios.post() to send requests in the front-end?
○	axios.post() is used to send HTTP POST requests to the server. In this system, it sends GraphQL queries and mutations to the API endpoint, allowing the front-end to interact with the backend.
8.	How does the system handle filtering employees in ManageEmployees?
○	The system filters employees by applying conditions to the current state based on the selected filters (e.g., by title, department). This is done through a combination of state management and conditional rendering within the component.
9.	What is the significance of the Modal component in the system?
○	The Modal component is used for displaying forms for adding or editing employees, as well as for showing detailed employee information. It provides a user-friendly interface for interacting with individual employee records.
10.	How are error messages displayed to the user?
○	Error messages are displayed using the React-Toastify library, which shows toast notifications on the screen whenever an error occurs during data fetching or form submissions.


Here are examples of GraphQL Playground queries for adding, editing, and deleting an employee in your Employee Management System:



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


