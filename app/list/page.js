export default function List() {
  //db데이터를 가져왔다고 생각함
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h2 className="title">Products</h2>
      {products.map((item, i) => {
        return (
          <div className="food" key={i}>
            <h4>{products[i]} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
