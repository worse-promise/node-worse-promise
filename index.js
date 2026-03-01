function promiseToCallback(promise) {
  return function (cb) {
    setTimeout(function () {
      promise.then(cb, "resolve")
      promise.catch(cb, "reject")
    }, 1) // so its async, we must force the callback
  }
}

function awaitableThenableFromCallBackThatWasFromAPromise(cber) {
  var obj = {
    then(fn, fn2) {
      cber(fn)
      cber(fn2)
      return obj
    },
    catch(fn) {
      cber(fn)
      return obj
    },
    finally(fn) {
      cber(fn)
      return obj
    }
  }
  return obj
}

function worsePromise(promise) {
  return awaitableThenableFromCallBackThatWasFromAPromise(promiseToCallback(promise))
}

function makeFunctionThatReturnsPromiseReturnAWorsePromise(fn) {
  return function() {
    return worsePromise(fn(...arguments))
  }
}

class WorsePromise extends Promise {
  constructor(...args) {
    var res = worsePromise(super(...args))
    res.constructor = WorsePromise
    return res
  }
}

module.exports = {
  worsePromise,
  WorsePromise,
  makeFunctionThatReturnsPromiseReturnAWorsePromise
}