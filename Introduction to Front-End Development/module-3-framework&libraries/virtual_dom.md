# Virtual DOM :

## Summary:
- React builds a representation of the browser Document Object Model (DOM) in memory called the virtual DOM.
- The reconciliation process in React compares the virtual DOM to the browser DOM and updates the browser DOM only when necessary.
- The React Fiber Architecture allows React to incrementally render the web page, optimizing when and where updates occur to improve performance and responsiveness.
- The highest priority changes, visible to the user, are updated first, while lower priority changes are updated later.
- The React Developer Tools web browser plugin developed by Meta is a useful tool for investigating how React processes your webpage.

## Keynotes:
- React uses the virtual DOM to update the browser DOM efficiently.
- The reconciliation process reduces the number of updates to the browser DOM.
- The React Fiber Architecture optimizes when and where updates occur.
- The highest priority changes are updated first.
- The React Developer Tools plugin helps in debugging and investigating React code.
