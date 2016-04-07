Taking [jest](https://facebook.github.io/jest/docs/tutorial.html#content) for a spin. Works great!

Keep in mind it uses jasmine2 and runs on NODEJS ONLY, with fake DOM provided by jsdom.


do:

    npm install
    npm run test


features in use in my samples:

* [basic test](https://facebook.github.io/jest/docs/getting-started.html#content) (sum, in `__tests__/sum-test.js`)
* [automatic mock](https://facebook.github.io/jest/docs/automatic-mocking.html#content) (stuff and usesStuff, in `__tests__/usesStuff.js`)
* [manual mocks](https://facebook.github.io/jest/docs/manual-mocks.html#content) (XHR, used in `__tests__/work-test.js`)
* [async its](https://facebook.github.io/jest/docs/tutorial-async.html#content) and [mocked setTimeout](https://facebook.github.io/jest/docs/timer-mocks.html#content) (XHR, used in `__tests__/asyncStuff-test.js`)
* [test coverage](https://facebook.github.io/jest/docs/getting-started.html#use-coverage-to-generate-a-code-coverage-report) (run `node_modules/.bin/jest --coverage` and notice how `work.js` function `unusedMethod` hasn't been tested)
