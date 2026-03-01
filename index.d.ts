interface WorsePromiseObject {
  then(onFulfilled: (value?: any) => void, onRejected: (value?: any) => any),
  catch(onRejected: (reason?: any) => void),
  finally(always: () => void)
}

export class WorsePromise {
  constructor(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): WorsePromiseObject
}

export function worsePromise(normalPromise: Promise): WorsePromise

export function makeFunctionThatReturnsPromiseReturnAWorsePromise(fn: (...args: any) => Promise): (...args: any) => WorsePromise