// require the employee from the lib folder
const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/employee");

//test can behin emplyee instance
describe("Employee", () => {
    it("Begin the instance of employee", () => {
        //e represents employee name
        const e = new Employee();
        //this can also be written as
        expect(new Employee (e)).toBe("object");
        // expect(typeof(e)).toBe("object");
        
        
    });
// test for this function

//test can set name via constructor args
it("Can set a name with the constructor arguments", () => {
    const name = "Ester";
    const e = new Employee(name);
})
//can set id via constructor args
//can set email vis constructor args
//can set name via construction function
//can set id via constructor function
//can get email vis constructor function
// role function should return employee
})
