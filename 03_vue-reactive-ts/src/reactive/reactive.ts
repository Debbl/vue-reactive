import getDepend from "./depend";

// type reactiveType = <T extends object>(obj: T) => T;
interface IObj {
  [index: string]: any;
}
type reactiveType = (obj: IObj) => typeof obj;
// const reactive: reactiveType = (obj) => {
//   return new Proxy(obj, {
//     get(target, key, receiver) {
//       const dep = getDepend(target, key);
//       dep.addDepend();
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, newValue, receiver) {
//       const dep = getDepend(target, key);
//       dep.notify();
//       return Reflect.set(target, key, newValue, receiver);
//     },
//   });
// };

const reactive: reactiveType = (obj) => {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const dep = getDepend(obj, key);
        dep.addDepend();
        return value;
      },
      set(newValue) {
        value = newValue;
        const dep = getDepend(obj, key);
        dep.notify();
      },
    });
  });

  return obj;
};

export default reactive;
