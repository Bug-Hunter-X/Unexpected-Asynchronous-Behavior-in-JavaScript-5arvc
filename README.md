# Unexpected Asynchronous Behavior in JavaScript

This repository demonstrates a common issue in JavaScript programming related to asynchronous operations. The `bug.js` file contains code that showcases how `setTimeout` functions don't block the execution flow, potentially leading to unexpected results if not handled properly. The `bugSolution.js` file provides a solution using promises to handle the asynchronous nature of the `setTimeout` function, ensuring correct output.  The solution emphasizes the importance of understanding and managing asynchronous operations to avoid common pitfalls in JavaScript development. 

## Usage
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js` and `node bugSolution.js` to observe the different behaviors.