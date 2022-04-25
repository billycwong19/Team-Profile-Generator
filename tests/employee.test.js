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
  describe("getRole", () => {
    it("it should return the string 'Employee' when called", () => {
        const obj = new Employee();

        expect(obj.getRole()).toEqual('Employee');
        });
    });
  describe("getName", () => {
    it("it should return a string of user input when called", () => {
        const obj = new Employee();

        expect(obj.getName()).toEqual(this.name);
        });
    });
    describe("getId", () => {
      it("it should return a string of user input when called", () => {
          const obj = new Employee();
  
          expect(obj.getId()).toEqual(this.id);
          });
      });
      describe("getEmail", () => {
        it("it should return a string of user input when called", () => {
            const obj = new Employee();
    
            expect(obj.getEmail()).toEqual(this.email);
            });
        });
});
