const Intern = require('../lib/intern')
describe("Intern", () => {
  describe("Initialization", () => {
    it("should return a property 'school' when called with 'new' keyword", () => {
        const obj = new Intern();
  
        expect("school" in obj).toEqual(true);
        });
    });
});