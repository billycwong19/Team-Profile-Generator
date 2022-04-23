const Employee = require('../lib/employee')

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
    });
    it("should return an object containing 'id' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("id" in obj).toEqual(true);
    });
    it("should return an object containing 'email' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("email" in obj).toEqual(true);
    });
  });
});
