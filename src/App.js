import React, { useState } from "react";
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";
import "./App.css";

const App = () => {
  let items = localStorage.getItem('itemList') ? JSON.parse(localStorage.getItem('itemList')) : [];
  let [userInput, setUserInput] = useState("");
  let [itemList, setItemList] = useState(items);
  localStorage.setItem('itemList', JSON.stringify(itemList));

const clearListHandler = () => {
  setItemList([]);
  localStorage.clear();
}
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
      <button onClick={clearListHandler}>Clear All</button>
    </div>
  );
};

export default App;
