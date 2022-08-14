import { getDepend } from "./depend";

const reactive = (obj) => {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const dep = getDepend(target, key);
      dep.addDepend();
      return Reflect.get(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
      const dep = getDepend(target, key);
      dep.notify();
      return Reflect.set(target, key, newValue, receiver);
    },
  });
};

export default reactive;
