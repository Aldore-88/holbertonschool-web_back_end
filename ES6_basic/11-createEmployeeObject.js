export default function createEmployeesObject(departmentName, employees) {
    // creating list of employees
    return {
        [`${departmentName}`]: employees,
    };
}