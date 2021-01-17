import React, { useState } from "react";
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";
import './App.css';

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [itemList, setItemList] = useState([]);

  return (
    <div className="container">
      <Header />
      <CreateItem
        userInput={userInput}
        setUserInput={setUserInput}
        setItemList={setItemList}
        itemList={itemList}
      />
      <ItemList
        userInput={userInput}
        itemList={itemList}
        setItemList={setItemList}
      />
    </div>
  );
};

export default App;
