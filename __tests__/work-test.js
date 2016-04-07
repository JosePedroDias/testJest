jest.mock('../XHR'); // default if ommitted
//jest.unmock('../XHR');

jest.unmock('../work');

describe('work', () => {
  it('asd asd asd', () => {
    const work = require('../work');
    const res = work.doWork('asd');
    expect(res).toBe('FAKE POST http://facebook.github.io/jest/');
  });
});
