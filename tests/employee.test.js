// require the employee from the lib folder
const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

//test can begin employee instance
describe("Employee", () => {
    it("Begin the instance of employee", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });

    //test can set name via constructor args
    it("Can set a name with the constructor argument", () => {
        const name = "Ester";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    //can set id via constructor args
    it("Can set an id with the constructor argument", () => {
        const id = 100;
        const e = new Employee("Azem", id);
        expect(e.id).toBe(id);
    });
    //can set email vis constructor args
    it("Can set an email with the constructor argument", () => {
        const email = "example@test.com";
        const e = new Employee("Azem", 1, email);
        expect(e.id).toBe(id);
    });

});
//can get name via construction function
describe("getName", () => {
    it("Can get name from getName()", () => {
        const name = "Ester";
        const e = new Employee(name);
        expect(e.getName()).toBe(name);
    })
});
//can get id via constructor function
describe("getId", () => {
    it("Can get id from getId()", () => {
        const id = 100;
        const e = new Employee("Azem", 1);
        expect(e.getId()).toBe(id);
    })
});
//can get email vis constructor function
describe("getEmail", () => {
    it("Can get email from getEmail()", () => {
        const email = "example@test.com";
        const e = new Employee("Azem", 1, email);
        expect(e.getEmail()).toBe(email);
    })
});
// role function should return employee
describe("getRole", () => {
    it("Returns \"Employee\" from getRole()", () => {
        const title = "Employee";
        const e = new Employee("Azem", 1, "example@text.com");
        expect(e.getRole()).toBe(title);
    })
});