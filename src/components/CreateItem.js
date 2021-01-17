const CreateItem = (props) => {
  const userInputHandler = (e) => {
    props.setUserInput(e.target.value);
  };
  const submitItemHandler = (e) => {
    e.preventDefault();
    props.setItemList([...props.itemList, props.userInput]);
    props.setUserInput('');
  };

  return (
    <form className='input__form' onSubmit={submitItemHandler}>
      <input value={props.userInput} type="text" className="item__input" onChange={userInputHandler} />
      <button className="item__submit" type="submit">
        +<i className="fas fa-cart-plus"></i>
      </button>
    </form>
  );
};

export default CreateItem;
