## Task 1 ## 
Make a function to calc n-th fibonacci number with caching in 2 ways, one with Map and one with WeakMap

`The n-th Fibonacci number is the sum of the (n-1)th and the (n-2)th. 
So to calculate the 100th Fibonacci number, for instance, we need to compute all the 99 values before it first.`

## Solution ##

The `fibonacci.js` file contains the solution for this task.

## Task 2 ##
Create your own realisation of EventEmitter. It should support 4 methods:
1. `emitter.emit(eventName[, ...args])`  - Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
2. `emitter.on(eventName, listener)` - Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
3. `emitter.prependListener(eventName, listener)` - Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
4. `emitter.removeListener(eventName, listener)` - Removes the specified listener from the listener array for the event named eventName.

## Solution ##

The `eventEmitter.js` file contains the solution for this task.

