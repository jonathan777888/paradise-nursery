import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

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

        <p className="cart-total">Total Cost: ${calculateTotalAmount()}</p>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item cart-item-card" key={item.id}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${calculateTotalCost(item)}</p>

                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleIncrement(item)}>+</button>

                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <button className="checkout-button" onClick={handleCheckout}>
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
