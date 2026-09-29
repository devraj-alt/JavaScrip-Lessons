//JavaScript is synchronous and single threaded language as default.
//1. Synchronous (In sequential Order): code is executed line by line, from top to bottom, in strict order. Line 2 will never execute until line 1 is finished.
//2. Single Threaded (One thing at a Time): A thread is like a single worker assigned to run code. It has only one Call Stack (one execution thread). It can process only one line of code at a single moment. It cannot run multiple lines of code parallel on the main thread.

//Execution Context: See notes.

// Blocking Code vs Non-Blocking Code

//1. Blocking Code: stops the execution of remaining program task until the current operation finishes. Everything behind the current task must freeze and wait for its turn.

//2. Non-Blocking Code: hands off slow or heavy tasks to the background so the rest of the program can keep running without delay. Other code runs immediately while the background task finishes.

//JS Engine, Web APIs, Queues, and Event Loop:

//JS Engine: consists of Memory Heap which stores variables, objects, and memory allocations and Call Stack where code is executed line by line (Last In, First Out). Global context sits at the bottom, and functions are staked on top as they are called. When the execution of function is over it is unloaded from the Call Stack.

//Web API: JS Engine offloads heavy/time based operations to the browser APIs like DOM API (listeners), steTimeout / setInterval (timers), fetch() (network calls).

//Register CallBack: registers the callback function to keep track of when background task is completes.

//Task Queue: when background Web API tasks complete, their callback functions wait in line one after another in queues, first in first out (FIFO).

//Macro-task Queue: Holds standard callbacks from setTimeout, setInterval, DOM events, etc.

//Micro-task Queue: Holds callback originating from Promises and fetch(). It is a high priority queue in the JavaScript Event Loop.
