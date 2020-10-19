/**
 * 节流Throttle
 */
// module.exports.throttle = (fn, delay) => {
//   // 定义上次触发时间
//   let last = 0;
//   return (...args) => {
//     const now = + Date.now();
//     console.log("call", now, last, delay);
//     if (now > last + delay) {
//       last = now;
//       fn.apply(this, args);
//     }
//   };
// };
/**
 * 防抖Debounce
 */
// module.exports.debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     // 判断定时器是否存在，清除定时器
//     if (timer) {
//       clearTimeout(timer);
//     }

//     // 重新调用setTimeout
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// };

module.exports.throttle = (fn, delay)=>{
  let last = 0;
  return (...args)=>{
    const now = Date.now();
    if(now > last + delay) {
      last = now;
      fn.apply(this, args)
    }
  }
}

module.exports.debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      fn.apply(this, args);
    }, delay);
  }
}