let reactiveFn: null | Function = null;

const watchEffect: (fn: Function) => void = (fn) => {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
};

export default watchEffect;
export { reactiveFn };
