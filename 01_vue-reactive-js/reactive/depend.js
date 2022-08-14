import { reactiveFn } from "./watchEffect";

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend() {
    reactiveFn && this.reactiveFns.add(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const objMap = new WeakMap();

const getDepend = (target, key) => {
  let map = objMap.get(target);
  if (!map) {
    map = new Map();
    objMap.set(target, map);
  }

  let dep = map.get(key);
  if (!dep) {
    dep = new Depend();
    map.set(key, dep);
  }
  return dep;
};

export { getDepend };
