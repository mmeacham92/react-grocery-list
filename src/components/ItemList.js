import Item from "./Item";

const ItemList = (props) => {
  return (
  <ul className="item__list">
      {props.itemList.map(item => (
          <Item userInput={item} itemList={props.itemList} setItemList={props.setItemList}/>
      ))}
  </ul>
  );
};

export default ItemList;
