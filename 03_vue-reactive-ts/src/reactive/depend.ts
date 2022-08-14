import { reactiveFn } from "./watchEffect";

const objWeakMep = new WeakMap<object, Map<string | symbol, Depend>>();

class Depend {
  reactiveFns = new Set<Function>();
  addDepend() {
    reactiveFn && this.reactiveFns.add(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

type getDependType = (target: object, key: string | symbol) => Depend;
const getDepend: getDependType = (target, key) => {
  let map = objWeakMep.get(target);
  if (!map) {
    map = new Map();
    objWeakMep.set(target, map);
  }
  let dep = map.get(key);
  if (!dep) {
    dep = new Depend();
    map.set(key, dep);
  }
  return dep;
};

export default getDepend;
