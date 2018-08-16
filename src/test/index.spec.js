const assert = require('chai').assert;
const app = require('../index');


describe('Index', () => {
  describe('sayHello', () => {
    it('should return type String', () => {
      let result = app.sayHello();
      assert.typeOf(result, 'String');
    });

    it('should return hello', () => {
      let result = app.sayHello();
      assert.equal(result, 'hello');
    });
  });

  describe('add', () => {
    it('should return type Number', () => {
      let val1 = 2, val2 = 4;
      let result = app.add(val1, val2);
      assert.typeOf(result, 'Number');
    });

    it('should return zero', () => {
      let val1 = val2 = 0;
      let result = app.add(val1, val2);
      assert.equal(result, 0);
    });

    it('should return above 5', () => {
      let val1 = 5, val2 = 1;
      let result = app.add(val1, val2);
      assert.isAbove(result, 5);
    });
  })
});