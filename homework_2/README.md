## Task 1 ## 
Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, 
so it can be chained in a functional manner. Example of usage

## Example ##
```
sum(1) //1
sum(1)(2) //2
sum(1)(2)(3)(4)(5)(6)(7) //28
```

# - #

## Task 2 ## 
Create a 'debounced' function that delays invoking function 
until after wait milliseconds have elapsed since the last time the debounced function was invoked.
The func is invoked with the last arguments provided to the debounced function.
Subsequent calls to the debounced function return the result of the last func invocation.

## Example ##
```
debounce(func, [wait=0])
```

## Solution Process ##


### Notes and Known Issues ###
