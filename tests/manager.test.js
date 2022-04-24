const Manager = require('../lib/manager')
describe("Manager", () => {
  describe("Initialization", () => {
    it("should return a property 'officeNumber' when called with 'new' keyword", () => {
        const obj = new Manager();
  
        expect("officeNumber" in obj).toEqual(true);
        });
    });
});