const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

//set office number
describe("Set office number via constructor argument", () => {
    const office = 100;
    const e = new Manager("Ester", 1, "example@test.com", office);
    expect(e.officeNumber).toBe(office);
});
//can get office number
describe("getOffice", () => {
    it("Can get office number from getOffice()", () => {
        const office = 100;
        const e = new Employee("Azem", 1, "example@test.com");
        expect(e.getOffice()).toBe(office);
    })
});
//role returns manager
describe("Returns \"Manager\" from getRole()", () => {
    const title = "Manager";
    const e = new Manager("Azem", 1, "example@test.com", 100);
    expect(e.getRole()).toBe(title);
  });