import Recucle from "./assets/images/vector.png";
import Done from "./assets/images/akar-icons_circle-1.png";

export const List = (props) => {
  const dateObject = new Date();
  const dateString = dateObject.toDateString();
  const dateArray = dateString.split(" ");
  const [day, month, number, ,] = dateArray;

  return (
    <div className="listDiv">
      <h1>{props.value}</h1>
      <p>
        {day}
        {month}
        {number}
      </p>
      <img src={Done} />
      <img src={Recucle} />
    </div>
  );
};
