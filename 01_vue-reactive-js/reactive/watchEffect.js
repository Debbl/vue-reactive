let reactiveFn = null;

const watchEffect = (fn) => {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
};

export default watchEffect;
export { reactiveFn };
