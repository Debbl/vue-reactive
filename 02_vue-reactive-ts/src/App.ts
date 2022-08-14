import Counter from "./counter";

const App = (element: HTMLDivElement) => {
  element.appendChild(Counter());
  element.appendChild(Counter());
};

export default App;
