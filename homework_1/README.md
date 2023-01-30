## Task ## 
Realise long arithmetic on strings without usage bigint and libraries for arithmetic.
It should work as string functions.
(you can avoid negative numbers, all numbers will be positive and integer)

## Example ##
```
String.plus(string) => string
String.minus(string) => string 
String.divide(string) => string
String.multiple(string) => string
```

## Solution Process ##
There are mainly two ways to process large numbers without the explicit usage of BigInt. 
- One is to use Array Representation. Which, as the name implies, is to represent the number as an array of digits. 
- The other way is to mimic how we would perform arithmetic operations on two numbers on paper. 

We will be using the second method as it is more intuitive and easier to implement.

### Notes ###
- Bitwise operators can be used to enhance the performance of the algorithm, but they make the code much less readable.
- The String.prototype.minus() function does not support negative numbers.
- The String.prototype.multiply() has precision issues regarding zeroes if the number is large.
- The String.prototype.divide() function does not support decimal division.