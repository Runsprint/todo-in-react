import plus from "./assets/images/plus.png";
import circle from "./assets/images/akar-icons_circle-1.png";

const ToDo = (props) => {
  return (
    <div className="mainDiv">
      <img src={circle} />
      <input
        type="text"
        placeholder="Note"
        onChange={(event) => {
          props.setTodoValue(event.target.value);
        }}
      />
      <button className="buttonPlus">
        <img src={plus} />
      </button>
    </div>
  );
};
export default ToDo;
