const Manager = require('../lib/manager')
describe("Manager", () => {
  describe("Initialization", () => {
    it("should return a property 'officeNumber' when called with 'new' keyword", () => {
        const obj = new Manager();
  
        expect("officeNumber" in obj).toEqual(true);
        });
    });
    describe("getRole", () => {
      it("it should return the string 'Manager' when called", () => {
          const obj = new Manager();

          expect(obj.getRole()).toEqual('Manager');
          });
      });
});