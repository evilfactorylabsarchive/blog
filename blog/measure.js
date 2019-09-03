const {PerformanceObserver,performance} = require('perf_hooks')

module.exports = function measure(fn, param){
    console.log('Mengukur Waktu Ekseskusi dari fungsi:', fn.name)
    console.log('dengan Parameter:', param)

    let result = null;

    const wrap = performance.timerify(fn.bind(this, param))

    const obs = new PerformanceObserver((list) => {
        result = list.getEntries()[0].duration 
        console.log(result);
        obs.disconnect();
    });

    obs.observe({ entryTypes: ['function'] });

    wrap();

    return result 
}
