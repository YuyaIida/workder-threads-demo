const { Worker } = require('worker_threads')
const { heavyTask } = require('./heavyTask')


console.time('total')

console.time('task#1')
heavyTask()
console.timeEnd('task#1')

console.time('task#2')
heavyTask()
console.timeEnd('task#2')

console.time('task#3')
heavyTask()
console.timeEnd('task#3')

console.timeEnd('total')