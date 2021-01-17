import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul className="item__list">
      {props.itemList.map((item) => (
        <Item
          userInput={item.item}
          itemList={props.itemList}
          setItemList={props.setItemList}
          key={item.id}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
