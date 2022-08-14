// let curFunction = null;

// function reactive(obj) {
//   return new Proxy(obj, {
//     get(target, key, receiver) {
//       const dep = getDepend(target, key);
//       dep.add(curFunction);
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, newValue, receiver) {
//       const dep = getDepend(target, key);
//       dep.notify();
//       return Reflect.set(target, key, newValue, receiver);
//     },
//   });
// }

// class Depend {
//   constructor() {
//     this.reactiveFns = new Set();
//   }
//   add(fn) {
//     fn && this.reactiveFns.add(fn);
//   }
//   notify() {
//     // this.reactiveFns[0]();
//     this.reactiveFns.forEach((fn) => fn());
//   }
// }

// const objMap = new WeakMap();
// function getDepend(obj, key) {
//   let map = objMap.get(obj);
//   if (!map) {
//     map = new Map();
//     objMap.set(obj, map);
//   }
//   let depArr = map.get(key);
//   if (!depArr) {
//     depArr = new Depend();
//     map.set(key, depArr);
//   }
//   return depArr;
// }

// function watchEffect(fn) {
//   curFunction = fn;
//   fn();
//   curFunction = null;
// }

// export { watchEffect, reactive };

export { default as watchEffect } from "./watchEffect";
export { default as reactive } from "./reactive";
