# Employee Management System (EMS)

## Overview
The **Employee Management System (EMS)** manages and tracks employees, departments, titles, types, and statuses within an organization.  
It also calculates and displays employee retirement information, including expected retirement dates, time left until retirement, and current retirement status (Retired or Upcoming).  
The system is built with **Node.js**, **Express**, **MongoDB**, **GraphQL**, and **React**, providing a seamless user experience through a well-organized UI and efficient backend operations.

---

## Key Features
- **Employee Management:** CRUD (Create, Read, Update, Delete) operations on employee records  
- **Department Management:** Manage different departments within the organization  
- **Title Management:** Create, update, and delete job titles  
- **Type Management:** Categorize employees into different types  
- **Status Management:** Track employee statuses (e.g., Active, Inactive)  
- **Retirement Calculations:** Automatically calculate retirement dates and categorize employees as Retired or Upcoming  
- **Filtering & Sorting:** Filter employees by various criteria and sort by attributes  
- **GraphQL API:** Flexible API for querying and mutating data  
- **React Front-End:** Responsive UI built with React, styled using Bootstrap

---

## System Architecture

### Backend
Built with **Node.js**, **Express**, **MongoDB**, and **GraphQL**.  
Key components:
- **GraphQL Resolvers:** Handle queries and mutations for employees, departments, titles, types, and statuses
- **Helper Functions:**
  - `calculateRetirementDate(dateOfBirth)` – Adds 65 years to date of birth to get retirement date
  - `calculateAge(dateOfBirth)` – Calculates current age
  - `calculateTimeLeft(retirementDate)` – Calculates time left until retirement

### Front-End
Built with **React**:
- `App` – Defines routes and layout
- `Dashboard` – Displays an overview of the organization
- `ManageEmployees` – CRUD operations and detailed employee information
- `UpcomingRetirements` – Lists employees with upcoming retirements and supports filtering by employee type

---

## Data Visualization
- **Pie Charts:** Created using **recharts** to visualize employee distribution by department, title, type, and status.

---

## Package Dependencies
- **Node.js** – JavaScript runtime for the backend server
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database for data storage
- **Mongoose** – ODM library for MongoDB and Node.js
- **GraphQL** – Query language for APIs
- **Apollo Server** – GraphQL server implementation
- **React** – JavaScript library for building the UI
- **React Router** – Routing in React applications
- **Bootstrap** – CSS framework for styling
- **Axios** – Promise-based HTTP client
- **Recharts** – Library for creating charts
- **React Bootstrap** – Bootstrap components for React
- **React Toastify** – Notifications library
- **Font Awesome** – Icon library for UI icons

---

## Code Explanation

### GraphQL Resolvers
- **Employees:**
  - `employees` – Fetches all employees and calculates details such as age, retirement date, time left, and retirement status
  - `employee` – Fetches a specific employee by ID
  - `upcomingRetirements` – Fetches employees with retirements in the next six months
- **Departments, Titles, Types, and Statuses:** Fetch respective entities from the database
- **Mutations:** CRUD operations for employees, departments, titles, types, and statuses

### React Components
- `App` – Sets up routes and main layout
- `Dashboard` – Shows total counts and pie charts for employees, departments, titles, types, and statuses
- `ManageEmployees` – Manages employee records, including filtering, sorting, and viewing details
- `UpcomingRetirements` – Lists employees nearing retirement, with type-based filtering

### Modals
Used for adding/editing employees and viewing detailed employee information.

---

## Getting Started
1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git

Here are the some of the functionalities this app perfoms-

<img width="1041" height="952" alt="add" src="https://github.com/user-attachments/assets/d19f6215-8f42-4e15-a4e0-10992becf659" />
<img width="1194" height="1330" alt="Dashboard" src="https://github.com/user-attachments/assets/fc1bfc7a-eed6-49b7-9815-4f8e7884b0d9" />
<img width="1173" height="1251" alt="Manage Employee Tab" src="https://github.com/user-attachments/assets/4a4c4744-4b79-470a-91d1-375846bee0e3" />
<img width="1174" height="998" alt="Other tabs looks the same" src="https://github.com/user-attachments/assets/f81e5341-cec0-41b7-a5fa-0cd089246633" />
<img width="1190" height="1591" alt="Retirement Tab" src="https://github.com/user-attachments/assets/a954633f-01d9-4611-a07c-9990ea3a633e" />





