const Engineer = require('../lib/engineer')
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return a property 'username' when called with 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("username" in obj).toEqual(true);
        });
    });
});