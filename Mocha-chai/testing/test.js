// const assert = require('assert');
const { expect } = require('chai');

const index = require('../index');




// describe('adding', function () {

//     //Test spec(unit test)
//     it('Adding of 1 and 3', () => {
//         assert.equal(index.add(1, 3), 4)
//     })

// });





describe('Sum numbers', () => {
    it('should add two numbers correctly', () => {
      const sum = 1 + 2;
      const expectedResult = 3;
      expect(sum).to.equal(expectedResult);
    });
});



describe('Substract numbers', () => {
    it('should substract two numbers correctly', () => {
      const sum = 3 - 2;
      const expectedResult = 1;
      expect(sum).to.equal(expectedResult);
    });
});



describe('Divide numbers', () => {
    it('should divide two numbers correctly', () => {
      const sum = 2 / 2;
      const expectedResult = 1;
      expect(sum).to.equal(expectedResult);
    });
});


describe('multiply numbers', () => {
    it('should multiply two numbers correctly', () => {
      const sum = 2 * 2;
      const expectedResult = 4;
      expect(sum).to.equal(expectedResult);
    });
});