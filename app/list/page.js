"use client";

import { useState } from "react";

export default function List() {
  //db데이터를 가져왔다고 생각함
  let products = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState([0, 0, 0]);

  const onIncrease = () => {
    let copy = [...count];
    copy[0]++;
    setCount(copy);
  };

  const onDecrease = () => {
    let copy = [...count];
    copy[0]--;
    setCount(copy);
  };
  return (
    <div>
      <h2 className="title">Products</h2>
      {products.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <button onClick={onDecrease}>-</button>
            <span> {count[i]} </span>
            <button onClick={onIncrease}>+</button>
          </div>
        );
      })}
    </div>
  );
}
