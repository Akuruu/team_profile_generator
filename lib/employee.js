// main constructor
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = "Employee";
    }
    // Retrieves employee details
    getRole() {
        return "Employee";
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.email;
    }
}
module.exports = Employee;