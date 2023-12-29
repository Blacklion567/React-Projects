import { useState } from "react";
import './Index.css';
import Data from './Data';
import List from './List';

const Countergame = () => {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <secton className="container">
        <h3>{people.length} birthdays today </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </secton>
    </>
  );
};

export default Countergame;
