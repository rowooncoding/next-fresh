export default function Cart() {
  // 데이터베이스에서 가져온거라고 생각
  let cart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem cart={cart[0]} />
      <CartItem cart={cart[1]} />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.cart}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
