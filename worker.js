const { workerData } = require('worker_threads')
const { heavyTask } = require('./heavyTask')

console.time(workerData)
heavyTask()
console.timeEnd(workerData)