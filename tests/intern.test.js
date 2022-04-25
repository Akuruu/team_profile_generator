const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

//set school name
describe("Set school name from constructor argument", () => {
    const school = "existing university of tests";
    const e = new Intern("Ester", "example@test.com", school);
    expect(e.schoolName).toBe(school);
});
//can get school name
describe("getSchool", () => {
    it("Can get school name from getSchool()", () => {
        const school = "existing university of tests";
        const e = new Intern("Ester", "example@test.com", school);
        expect(e.getSchool()).toBe(school);
    })
});
//role returns intern
describe("Returns Intern from getRole()", () => {
    const title = "Intern";
    const e = new Intern("Ester", "example@test.com", school);
    expect(e.getRole()).toBe(title);
});