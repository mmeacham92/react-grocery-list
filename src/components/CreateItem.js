import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CreateItem = (props) => {
  const userInputHandler = (e) => {
    props.setUserInput(e.target.value);
  };
  const submitItemHandler = (e) => {
    e.preventDefault();
    console.log(props.userInput);

    if (!props.itemList.some((item) => item.item.toLowerCase() === props.userInput.toLowerCase()) && props.userInput !== '') {
      props.setItemList([
        ...props.itemList,
        { id: uuidv4(), item: props.userInput },
      ]);
      props.setUserInput("");
    }
  };

  return (
    <form className="input__form" onSubmit={submitItemHandler}>
      <input
        value={props.userInput}
        type="text"
        className="item__input"
        onChange={userInputHandler}
      />
      <button className="item__submit" type="submit">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </form>
  );
};

export default CreateItem;
