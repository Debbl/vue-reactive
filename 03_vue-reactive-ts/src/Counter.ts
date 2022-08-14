import { reactive, watchEffect } from "./reactive";

// reactive()
// watchEffect()

const Counter: () => HTMLDivElement = () => {
  // data
  const counter = reactive({
    countA: 0,
    countB: 0,
  });

  // template
  // .counter-container
  const container = document.createElement("div");
  container.classList.add("counter-container");
  // .counter-container .count-a
  const countAEl = document.createElement("div");
  countAEl.classList.add("count-a");
  // button
  const btnAEl = document.createElement("button");
  btnAEl.textContent = "countA++";
  btnAEl.addEventListener("click", () => {
    counter.countA++;
  });

  watchEffect(function renderCountA() {
    console.log("renderA 执行了");
    countAEl.innerHTML = `<h2>countA is ${counter.countA}</h2>`;
    countAEl.appendChild(btnAEl);
  });

  container.appendChild(countAEl);

  return container;
};

export default Counter;
