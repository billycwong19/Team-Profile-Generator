const Engineer = require('../lib/engineer')
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return a property 'username' when called with 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("username" in obj).toEqual(true);
        });
    });
    describe("getRole", () => {
      it("it should return the string 'Engineer' when called", () => {
          const obj = new Engineer();

          expect(obj.getRole()).toEqual('Engineer');
          });
      });
    describe("getGitHub", () => {
      it("it should return a string of user input when called and output a link", () => {
          const obj = new Engineer();

          expect(obj.getGitHub()).toEqual(`GitHub: <a href="http://github.com/${this.username}/">${this.username}</a>`);
          });
      });
});