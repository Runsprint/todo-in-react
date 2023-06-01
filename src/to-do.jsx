import plus from "./assets/images/plus.png";
import circle from "./assets/images/emptycircle.png";
import Done from "./assets/images/akar-icons_circle-1.png";
import { format, isToday, isYesterday } from "date-fns";
import { useRef, useState } from "react";
import Recucle from "./assets/images/Vector.png";
import { useEffect } from "react";

const ToDo = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const [changeImage, setChangeImage] = useState([]); // for change images onclick

  const [array, setArray] = useState(() => {
    const storedItems = localStorage.getItem("localTodo");

    if (storedItems) {
      const parsedItems = JSON.parse(storedItems, (key, value) => {
        //parse for: string change into object
        if (key === "createdAt") {
          return new Date(value);
        }

        return value;
      });

      return parsedItems;
    }
  });

  useEffect(() => {
    localStorage.setItem("localTodo", JSON.stringify(array)); // setitem for in new item and have name "localtodo"
  }, [array]);

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
      <div className="buttondiv">
        <input
          type="text"
          placeholder="Note"
          value={todoValue}
          className="input"
          onChange={(event) => {
            setTodoValue(event.target.value);
          }}
        />
        <img src={circle} className="inputimg" />
        <button className="buttonPlus" onClick={handlerShowList}>
          <img src={plus} />
        </button>
      </div>

      {array &&
        array.map((item, index) => {
          const time = format(item.createdAt, " hh:mm b"); // format times
          const days = renderDate(item.createdAt);

          return (
            <div className="listDiv" key={index}>
              <div>
                <h1 className="title">{item.todo}</h1>

                <p className="time">
                  {days} at {time}
                </p>
              </div>
              <div className="logoes">
                <img
                  src={changeImage.includes(index) ? Done : circle} // include method , i should check of changeimage include index
                  alt="Current Image"
                  onClick={() => {
                    setChangeImage(changeImage.concat(index)); // add index into []
                  }}
                />
                <img
                  src={Recucle}
                  onClick={() => {
                    // const newArray = array.filter((_, i) => i !== index);
                    // setArray(newArray);
                    // its second version of remove item

                    const newArray = [...array]; //...array : that means that new variable is newArray and we can manipulate on it
                    newArray.splice(index, 1); // splice is for remove and after we save new value into new variable
                    setArray(newArray);
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ToDo;
