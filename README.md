# Type 'string[]' is not assignable to type 'string'

This repo demonstrates a common TypeScript error: passing an array to a function expecting a string. The error message is clear: `Type 'string[]' is not assignable to type 'string'`. This means the `greeter` function expects a single string, but instead, it receives an array of strings.

## Solution

The solution involves modifying either the function signature or how the user variable is handled. The `bugSolution.ts` file shows two possible solutions:

1.  **Modify the function to accept an array of strings:** This changes the function signature to accommodate multiple names.
2.  **Modify the user variable to be a single string:** This requires choosing a single name from the array to pass to the function.