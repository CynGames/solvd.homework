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
There are several ways to process large numbers without the explicit usage of BigInt, such as: 
- Array Representation
- Modular Arithmetic
- Elementary School Algorithm

The most convenient way to solve this task is to implement the Elementary School Algorithm 
due to the simplicity of the algorithm and the requirement to take strings as input.

### General overview of the Elementary School Algorithm: ###
The idea of the algorithm is to mimic how we would perform arithmetic operations on two numbers on paper.

First, the code defines a new function, that is added to the prototype of the JavaScript String object. 
This function can then be called on any string value and takes one argument, "num_as_string", 
which is expected to be a number but as a string data type. 

The function starts by initializing some variables: 
- "firstNumber" is the string on which the function is called (i.e. "this").
- "secondNumber" is the "num_as_string" argument.
- "result" is an empty string that will be used to store the final result of the operation.
- "carry" is an integer that will be used to track any carrying over of digits from one column of the addition to the next.

Then, the two numbers are then padded with leading zeroes so that they have the same number of digits.
This is to ensure that the digits align correctly for the addition.

The for loop then starts at the rightmost digit of the two numbers and works its way to the left,
adding the corresponding digits of the two numbers together, along with any carry from the previous column.
The result of the addition is then divided by 10, and the remainder is appended to the "result" string,
while the quotient is stored as the new value of "carry."

Finally, if there is any remaining carry after all the digits have been processed, it is added to the front of the "result" string.
The final value of the "result" string is then returned as the result of the function.

### Notes ###
- Bitwise operators can be used to enhance the performance of the algorithm, but they make the code much less readable.
- The String.prototype.minus() function does not support negative numbers.
