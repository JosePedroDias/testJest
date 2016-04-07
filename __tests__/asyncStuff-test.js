jest.unmock('../asyncStuff'); // unmock to use the actual implementation of sum

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 1000; // unnecessary because we're not firing a real setTimeout...

describe('asyncStuff', () => {
  pit('returns what you passed it', () => {
    const asyncStuff = require('../asyncStuff');
    process.nextTick(() => {
        //jest.runAllTimers();
        jest.runOnlyPendingTimers();
    });
    return asyncStuff(2, '42!')
    .then((r) => {
        expect(r).toBe('42!');
    })
  });

  it('setTimeout is mocked and can work synchronously', () => {
      const asyncStuff = require('../asyncStuff');
      asyncStuff(2, '42!')
      .then((r) => {
          expect(r).toBe('42!');
      })

      jest.runOnlyPendingTimers();

      expect(setTimeout.mock.calls.length).toBe(1);
      expect(setTimeout.mock.calls[0][1]).toBe(2000);
  });
});
