export function deBounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    // console.log(timer)
    // console.log(args)
    timer = setTimeout(() => {
      // refresh()
      func.apply(this, args)
    }, delay)
    // console.log(timer)
  }
}
