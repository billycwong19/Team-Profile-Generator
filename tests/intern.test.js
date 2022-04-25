const Intern = require('../lib/intern')
describe("Intern", () => {
  describe("Initialization", () => {
    it("should return a property 'school' when called with 'new' keyword", () => {
        const obj = new Intern();
  
        expect("school" in obj).toEqual(true);
        });
    });
    describe("getRole", () => {
      it("it should return the string 'Intern' when called", () => {
          const obj = new Intern();

          expect(obj.getRole()).toEqual('Intern');
          });
      });
    describe("getSchool", () => {
      it("it should return a string with user input when called", () => {
          const obj = new Intern();

          expect(obj.getSchool()).toEqual(`Currently enrolled at: ${this.school}`);
          });
      });
});