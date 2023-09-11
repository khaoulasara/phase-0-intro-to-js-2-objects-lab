// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = Object.assign({}, employee, { [key]: value });
    console.log("Updated Employee with Key and Value:", newEmployee);
    return newEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log("Destructively Updated Employee with Key and Value:", employee);
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    console.log("Deleted Key from Employee:", newObj);
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    console.log("Destructively Deleted Key from Employee:", employee);
    return employee;
  }
  
  // Example usages:
  updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "10 Elm Street");
  deleteFromEmployeeByKey(employee, "name");
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  