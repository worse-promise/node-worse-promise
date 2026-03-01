# worse-promise

promise but worse

## why

in enterprise corporations, we put unreliability over reliability. if it walks like a duck and sounds like a duck, it's a duck.

## installation

you know how to install an npm package if you're worthy of using this package.

## usage

```js
const {
  worsePromise,
  WorsePromise,
  makeFunctionThatReturnsPromiseReturnAWorsePromise,
} = require("worse-promise")

const p = worsePromise(Promise.resolve("Success"))

p.then((data) => {
  console.log(data) // outputs "Success"
})

const wp = new WorsePromise((resolve) => resolve("I am worse"))

wp.then((data) => {
  console.log(data) // outputs "I am worse"
})

const axios = require("axios")

const worseAxios = makeFunctionThatReturnsPromiseReturnAWorsePromise(axios)

worseAxios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    // may execute when there's yes error
    console.log(response)
  })
  .catch(function (error) {
    // may execute when there's no error
    console.log(error)
  })
  .finally(function () {
    // probably always executed
  })
```

## features
- 0 reliability
- 10x engineering
- 67 rizz
- <strikethrough>0 fanum tax</strikethrough>
- free v-bucks
- 0.1% a+ spec compliance at least
- 0 tests
- async
- promise-like
- duck typed

This is a Schrodinger+ promise, because it is both success and failure at the same time, even after when it is observeed.

## licence
[curse of knowledge](https://github.com/ErikMcClure/bad-licenses/blob/master/curse-of-knowledge)
you probably don't want to read that or you get fanum-taxed self-referentially depending on the quantum collapse of the universe
if you don't think that licence is legal, then this project is licenced under [EGPSL10X-1.0](https://github.com/10xly/licence)