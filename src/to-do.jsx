import plus from "./assets/images/plus.png";
import circle from "./assets/images/akar-icons_circle-1.png";
import { format, isToday, isYesterday } from "date-fns";
import { List } from "./list";
import { useState } from "react";
import Recucle from "./assets/images/vector.png";
import Done from "./assets/images/akar-icons_circle-1.png";

const ToDo = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const [array, setArray] = useState([]);

  const handlerShowList = () => {
    const newTask = {
      todo: todoValue,
      completed: false,
      createdAt: new Date(),
    };
    setArray([newTask, ...array]);
    setTodoValue("");
  };
  function renderDate(currentDate) {
    let formattedDate;

    if (isToday(currentDate)) {
      formattedDate = "Today";
    } else if (isYesterday(currentDate)) {
      formattedDate = "Yesterday";
    } else {
      formattedDate = format(currentDate, "MMMM d y");
    }

    return formattedDate;
  }

  return (
    <div className="mainDiv">
      <img src={circle} />
      <input
        type="text"
        placeholder="Note"
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
      />
      <button className="buttonPlus" onClick={handlerShowList}>
        <img src={plus} />
      </button>
      {array.map((item, index) => {
        const time = format(item.createdAt, " hh:mm b");
        const days = renderDate(item.createdAt);

        return (
          <div className="listDiv" key={index}>
            <h1>{item.todo}</h1>
            <p>
              {days} at {time}
            </p>
            <img src={Done} />
            <img src={Recucle} />
          </div>
        );
      })}
    </div>
  );
};
export default ToDo;
