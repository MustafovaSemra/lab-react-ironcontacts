import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [list, setList] = useState(contacts.slice(0, 5));
  const [rest, setRest] = useState(contacts);

  const addRandomContact = (i) => {
    let restOfContacts = [...rest];
    let randomIndex = Math.floor(Math.random() * restOfContacts.length);
    let random = restOfContacts[randomIndex];
    let copyOfList = [...list];
    copyOfList.push(random);
    setList(copyOfList);
    let copyOfRest = [...rest];
    copyOfRest.splice(randomIndex, 1);
  };

  const sortByPopularity = () => {
    let popularList = [...list].sort((a, b) => b.popularity - a.popularity);
    setList(popularList);
  };

  const sortByName = () => {
    let sortedByName = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedByName);
  };

  const deleteName = (i) => {
    let copyOfList = [...list];
    copyOfList.splice(i, 1);
    setList(copyOfList);
  };

  const FirstFive = () => {
    let listOfFirstFive = list.map((eachCeleb) => {
      return (
        <table>
          <td>
            <img src={eachCeleb.pictureUrl} style={{ height: 100 }} />
          </td>
          <td>{eachCeleb.name}</td>
          <td>{eachCeleb.popularity.toFixed(2)}</td>
          <td>
            <button onClick={deleteName}>Delete</button>
          </td>
        </table>
      );
    });
    return listOfFirstFive;
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatirty</th>
          </tr>
        </thead>
        <tbody>
          <FirstFive />
        </tbody>
      </table>
    </div>
  );
}

export default App;
