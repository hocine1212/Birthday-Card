import { useState } from "react";
import List from "./LIst";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople} />
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
