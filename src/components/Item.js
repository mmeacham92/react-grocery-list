const Item = (props) => {

  const checkRemoveHandler = (e) => {
    const item = e.target;
    const groceryItem = item.parentElement;
    console.log(groceryItem);
    if (item.classList.contains("remove")) {
      const itemIndex = props.itemList.indexOf(groceryItem.firstChild.textContent);
      props.itemList.splice(itemIndex, 1);
      groceryItem.remove();
    }
    if (item.classList.contains('check')) {
      groceryItem.classList.toggle('checked');
    }
  };

  return (
    <div className="item__div">
      <li className="item">{props.userInput}</li>
      <button onClick={checkRemoveHandler} className="check item__button">
        Check
      </button>
      <button onClick={checkRemoveHandler} className="remove item__button">
        Remove
      </button>
    </div>
  );
};

export default Item;
