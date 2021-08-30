import "./styles.css";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";

export default function App() {
  const [mainCount, setMainCount] = useState(0);
  // const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState(([] = new Array(1000).fill(0)));
  const items = [
    {
      id: 1,
      itemName: "Rice",
      price: "20$"
    },
    {
      id: 2,
      itemName: "Suger",
      price: "20$"
    },
    {
      id: 3,
      itemName: "Sauce",
      price: "20$"
    }
  ];
  // const mainCount=(id){
  //   setMainCount((prev)=>itemCount.map((prev,itemCount,index)=>(itemCount[id]))

  // }
  const increment = (id) => {
    setItemCount((prev) =>
      prev.map((prev, index) => (index === id ? prev + 1 : prev))
    );
    if (itemCount[id] === 0) {
      setMainCount((prev) => prev + 1);
    }
  };
  // const deleteAll = () => {
  //   setItemCount([{}]);
  // };
  const onPlus = (id) => {
    console.log(`the id value is ${id}`);
    setItemCount((prev) =>
      prev.map((prev, index) => (index === id ? prev + 1 : prev))
    );
  };

  const onMinus = (id) => {
    // console.log(`the id value is ${id}`);
    setItemCount((prev) =>
      prev.map((prev, index) => (index === id ? prev - 1 : prev))
    );
    if (itemCount[id] === 1) {
      setMainCount((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <h1>Hello </h1>
      <h2>A shopping cart</h2>
      <div className="CartStyles">
        <IoCartSharp className="IconStyles" />{" "}
        <span className="CountStyles">{mainCount}</span>
      </div>
      {items.map((item) => (
        <div key={item.id} style={{ marginTop: 20, color: "#faa107" }}>
          <div style={{ marginBottom: 15 }}>
            {" "}
            <h4 style={{ display: "inline" }}>{item.itemName}: </h4>
            <span>{item.price}</span>
          </div>

          {itemCount[item.id] === 0 ? (
            <button
              className="DisabledDecrementButton"
              onClick={() => onMinus(item.id)}
              disabled
            >
              -
            </button>
          ) : (
            <button
              className="DecrementButton"
              onClick={() => onMinus(item.id)}
            >
              -
            </button>
          )}
          {itemCount[item.id] >= 1 ? (
            <button className="IncrementButton" onClick={() => onPlus(item.id)}>
              +
            </button>
          ) : (
            <button
              className="DisabledIncrementButton"
              onClick={() => onPlus(item.id)}
              disabled
            >
              +
            </button>
          )}

          {itemCount[item.id] === 0 ? (
            <button className="AddButton" onClick={() => increment(item.id)}>
              Add
            </button>
          ) : (
            <button
              className="DisabledAddButton"
              onClick={() => increment(item.id)}
              disabled
            >
              Add
            </button>
          )}
          <span style={{ marginLeft: 20, color: "#302e8c" }}>
            Total count : {itemCount[item.id]}
          </span>
        </div>
      ))}
      <br />
      {mainCount === 0 && (
        <h1 style={{ color: "#fa6761" }}>
          <b>No items to display</b>
        </h1>
      )}

      {/* <button onClick={deleteAll}>Delete all </button> */}
    </div>
  );
}
