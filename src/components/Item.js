import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faCheck} className='icon'/>
      </button>
      <button onClick={removeHandler} className="remove item__button">
        <FontAwesomeIcon icon={faTrash} className='icon'/>
      </button>
    </div>
  );
};

export default Item;
