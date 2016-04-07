const XHR = require('./XHR');

function doWork() {
  const xhr = new XHR();
  xhr.open('POST', 'http://facebook.github.io/jest/');
  return xhr.send();
}

function unusedMethod(a, b) {
    const c = a + b;
    return c * 5;
}

module.exports = {
    doWork: doWork,
    unusedMethod: unusedMethod
};
