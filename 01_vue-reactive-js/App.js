import Counter from "./Counter";

export default function App(element) {
  const CounterCom1 = Counter();
  const CounterCom2 = Counter();
  element.appendChild(CounterCom1);
  element.appendChild(document.createElement("hr"));
  element.appendChild(CounterCom2);
}
