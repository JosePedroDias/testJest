function timedPromise(secs, response) {
    return new Promise((resolve, reject) => {
        // process.nextTick(() => {
        setTimeout(() => {
            resolve(response);
        }, secs * 1000);
    });
}

module.exports = timedPromise;
