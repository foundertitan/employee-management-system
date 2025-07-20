const Employee = require('./models/employee');

const resolvers = {
  Query: {
    getEmployees: async () => await Employee.find({}),
    getEmployee: async (_, { id }) => await Employee.findById(id)
  },
  Mutation: {
    createEmployee: async (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType }) => {
      const employee = new Employee({ firstName, lastName, age, dateOfJoining, title, department, employeeType });
      await employee.save();
      return employee;
    },
    updateEmployee: async (_, { id, title, department, currentStatus }) => {
      const employee = await Employee.findByIdAndUpdate(
        id,
        { title, department, currentStatus },
        { new: true }
      );
      return employee;
    },
    deleteEmployee: async (_, { id }) => {
      const employee = await Employee.findByIdAndDelete(id);
      return employee;
    }
  }
};

module.exports = resolvers;
