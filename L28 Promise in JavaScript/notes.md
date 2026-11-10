_Understanding fetch:_

```
const response = fetch('something')
```
1. JavaScript reaches the line and runs fetch()

2. fetch give the network job to the browser. JS cannot do networking by itself.

3. At the same time fetch returns a Promise object right away.
It starts empty:
      state: pending
      data: empty
      onFulfilled: [ ]    (list of functions to run on success)
      onRejection: [ ]    (list of functions to run on failure)

4. This Promise is stored in the variable response.
    That is why console.log(response) shows Promise {<pending>}.
    JS does not wait. It moves to the next line.

5. .then(fn) puts fn into the onFulfilled list.
    .catch(fn) puts fn into the onRejection list.
    They do not run yet. They only wait.

6. The browser finishes the network request.
    It either succeeds or fails.

7. The browser fills the SAME Promise object (response does not change):
      success -> state: fulfilled, data: Response object
      failure -> state: rejected, data: error

8. The waiting functions run and receive the data (or the error):
      success -> functions in onFulfilled run
      failure -> functions in onRejection run

_Important Points:_

 - The two lists hold FUNCTIONS, not data.
 - response is never replaced. The same Promise is filled in.
 - Callbacks do not run instantly. They wait in the microtask queue
   until the current code finishes, so .then code runs after the lines below it.
 - fetch rejects only on network failure. A 404 or 500 still counts as success,
   so check response.ok yourself.
 - The data in a fetch Promise is a Response object, not your JSON.
   You need a second step: await response.json()

_Where await fits:_
await does not change any of these steps.

It pauses only your async function until step 7 is done.

Then you get the filled value instead of the pending Promise.

const res = await fetch(url)
   -> res becomes a real Response at step 7, when the Promise is fulfilled.