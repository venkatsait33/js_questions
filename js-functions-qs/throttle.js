
function throttle(func, delay) {
    let lastTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            func(...args);
            lastTime = now;
        }
    };
}
const logMessage = () => {
    console.log('Function called');
};

// Throttle the logMessage function to be called at most once every 2 seconds (2000ms)
const throttledLogMessage = throttle(logMessage, 2000);

// Call the throttled function multiple times
setInterval(throttledLogMessage, 500); // This will log the message once every 2 seconds
