const Engineer = require('../lib/engineer')
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return a property 'officeNumber' when called with 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("officeNumber" in obj).toEqual(true);
        });
    });
});