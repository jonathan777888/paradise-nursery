import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 22,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 5,
    name: "Orchid",
    price: 35,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566907225472-674b6a9ed72f",
  },
  {
    id: 6,
    name: "Anthurium",
    price: 28,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
];

function ProductList({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const categories = [...new Set(products.map((product) => product.category))];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("about")}>About Us</button>
          <button onClick={() => setCurrentPage("products")}>Plants</button>
          <button onClick={() => setCurrentPage("cart")}>
            Cart 🛒 ({totalItems})
          </button>
        </div>
      </nav>

      <div className="product-page">
        <h1>Our Houseplants</h1>

        {categories.map((category) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>

                    <button
                      className="add-button"
                      onClick={() => handleAddToCart(product)}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
