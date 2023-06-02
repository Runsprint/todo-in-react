import plus from "./assets/images/plus.png";
import circle from "./assets/images/emptycircle.png";
import Done from "./assets/images/akar-icons_circle-1.png";
import { format, isToday, isYesterday } from "date-fns";
import { useRef, useState } from "react";
import Recucle from "./assets/images/Vector.png";
import { useEffect } from "react";

const ToDo = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const [changeImage, setChangeImage] = useState([]);

  //images functional, for save after refresh
  useEffect(() => {
    const storedChangeImage = localStorage.getItem("changeImage");
    if (storedChangeImage) {
      setChangeImage(JSON.parse(storedChangeImage));
    }
  }, []);

  //functional for save in localstorage
  const [array, setArray] = useState(() => {
    const storedItems = localStorage.getItem("localTodo");

    if (storedItems) {
      const parsedItems = JSON.parse(storedItems, (key, value) => {
        if (key === "createdAt") {
          return new Date(value);
        }
        return value;
      });

      return parsedItems;
    }

    return []; // Return an empty array if there are no stored items
  });

  useEffect(() => {
    localStorage.setItem("localTodo", JSON.stringify(array));
  }, [array]);

  //function for save items information in array and push into it
  const handlerShowList = () => {
    const newTask = {
      todo: todoValue,
      completed: false,
      createdAt: new Date(),
    };
    setArray([newTask, ...array]);
    setTodoValue("");
  };
  // function for render times, massive use how we needed
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

      {Array.isArray(array) &&
        array.map((item, index) => {
          const time = format(item.createdAt, " hh:mm b"); // created new div and formattime
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
                  src={changeImage.includes(index) ? Done : circle} // include method
                  alt="Current Image"
                  onClick={() => {
                    if (changeImage.includes(index)) {
                      setChangeImage(changeImage.filter((i) => i !== index)); // Remove index from changeImage
                    } else {
                      setChangeImage(changeImage.concat(index)); // Add index to changeImage
                    }
                    localStorage.setItem(
                      // save in localstorage images if it is Done or circle.this is a functional how we can save everything in local storeage and up is usestate for this functional
                      "changeImage",
                      JSON.stringify(changeImage)
                    );
                  }}
                />
                <img
                  src={Recucle}
                  onClick={() => {
                    const index = array.indexOf(item); // its for delete function(splice methis) from where to and how many component u want to remove
                    const newArray = [...array];
                    newArray.splice(index, 1);
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
