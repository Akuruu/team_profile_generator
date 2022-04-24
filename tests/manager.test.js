const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

//can set office number
describe("Set office number via constructor argument", () => {
    // say the office number is 100, we're testing that value
    const office = 100;
    //name, ID, email, office number is test val
    const e = new Manager("Khona", 1, "khona@rhun.com", office);
    expect(e.officeNumber).toBe(testVal);
})
//can get office number
//role returns manager