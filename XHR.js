'use strict';

class XHR {
    open(method, url) {
        this.method = method;
        this.url = url;
    }

    send() {
        return ['REAL', this.method, this.url].join(' ');
    }
}

module.exports = XHR;
