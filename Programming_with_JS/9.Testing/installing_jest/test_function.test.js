const {default: TestRunner} = require('jest-runner');
const add3 = require('./test_function');

test('adds 1 + 2 to equal 3', () => {
    expect(add3(1,2)).toBe(3);
    });
