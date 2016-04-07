jest.unmock('../usesStuff');

describe('usesStuff', () => {
  it('check calls public api of stuff', () => {
    const usesStuff = require('../usesStuff');
    const stuff = require('../stuff');

    expect(stuff.fun1).not.toBeCalled();
    expect(stuff.fun2).not.toBeCalled();

    usesStuff();
    
    expect(stuff.fun1.mock.calls.length).toEqual(1);
    expect(stuff.fun2.mock.calls.length).toEqual(2);
  });
});
