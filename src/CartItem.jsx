import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "./CartSlice";

function CartItem({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("products")}>
            Continue Shopping
          </button>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <p className="cart-total">Total Cost: ${totalCost}</p>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>

                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>

                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <button
          className="checkout-button"
          onClick={() => alert("Coming Soon")}
        >
          Checkout
        </button>

        <button
          className="continue-button"
          onClick={() => setCurrentPage("products")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartItem;
