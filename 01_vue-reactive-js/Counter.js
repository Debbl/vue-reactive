import { reactive, watchEffect } from "./reactive";

function Counter() {
  // data
  const counter = reactive({
    countA: 0,
    countB: 0,
  });

  // template
  // .counter
  const containerEl = document.createElement("div");
  containerEl.classList.add("counter");

  // .counter > .count-a
  const countAEl = document.createElement("div");
  countAEl.classList.add("count-a");
  const btnAEl = document.createElement("button");
  btnAEl.textContent = "addCountA";
  btnAEl.addEventListener("click", () => {
    console.log("Ok");
    counter.countA++;
  });
  watchEffect(() => {
    countAEl.innerHTML = `<h2>countA is ${counter.countA}</h2>`;
    countAEl.appendChild(btnAEl);
  });

  // .counter .count-b
  const countBEl = document.createElement("div");
  countBEl.classList.add("count-b");
  const btnBEl = document.createElement("button");
  btnBEl.textContent = "addCountB";
  watchEffect(() => {
    countBEl.innerHTML = `<h2>countB is ${counter.countB}</h2>`;
    countBEl.appendChild(btnBEl);
  });
  btnBEl.addEventListener("click", () => {
    console.log("Ok");
    counter.countB++;
  });

  containerEl.appendChild(countAEl);
  containerEl.appendChild(countBEl);

  return containerEl;
}

export default Counter;
