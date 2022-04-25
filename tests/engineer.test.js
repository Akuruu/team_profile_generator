const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

//set github user
describe("Set github username from constructor argument", () => {
    const github = "example123";
    const e = new Engineer("Ester", "example@test.com", github);
    expect(e.githubUser).toBe(github);
});
//can get github user
describe("getGithub", () => {
    it("Can get github username from getGithub()", () => {
        const github = "example123";
        const e = new Engineer("Ester", "example@test.com", github);
        expect(e.getGithub()).toBe(github);
    })
});
//role returns intern
describe("Returns Engineer from getRole()", () => {
    const title = "Engineer";
    const e = new Engineer("Ester", "example@test.com", github);
    expect(e.getRole()).toBe(title);
});