const Item = (props) => {
  const checkHandler = (e) => {
    const groceryItem = e.target.parentElement;
    groceryItem.classList.toggle("checked");
  };

  const removeHandler = (e) => {
    console.log(e.target.parentElement);
    props.setItemList(
      props.itemList.filter((item) => e.target.parentElement.id !== item.id)
    );
  };

  return (
    <div className="item__div" id={props.id}>
      <li className="item">{props.userInput}</li>
      <button onClick={checkHandler} className="check item__button">
        Check
      </button>
      <button onClick={removeHandler} className="remove item__button">
        Remove
      </button>
    </div>
  );
};

export default Item;
