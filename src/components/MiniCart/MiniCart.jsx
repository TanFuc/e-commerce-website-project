import React, { useState, useEffect } from "react";

function ShoppingCart() {
  const [cartVisible, setCartVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("listCart="));
    if (cookieValue) {
      setListCart(JSON.parse(cookieValue.split("=")[1]));
    }
  }, []);

  useEffect(() => {
    document.cookie = `listCart=${JSON.stringify(
      listCart
    )}; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;`;
  }, [listCart]);

  const addCart = (idProduct) => {
    setListCart((prevCart) => {
      const newCart = [...prevCart];
      const productIndex = newCart.findIndex((item) => item.id === idProduct);
      if (productIndex !== -1) {
        newCart[productIndex].quantity++;
      } else {
        const product = products.find((item) => item.id === idProduct);
        newCart.push({ ...product, quantity: 1 });
      }
      return newCart;
    });
  };

  const changeQuantity = (idProduct, type) => {
    setListCart((prevCart) => {
      const newCart = prevCart
        .map((item) => {
          if (item.id === idProduct) {
            const newQuantity =
              type === "+" ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      return newCart;
    });
  };

  const totalQuantity = listCart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div
      className="container"
      style={{
        transform: cartVisible ? "translateX(-400px)" : "translateX(0)",
      }}
    >
      <button className="iconCart" onClick={() => setCartVisible(!cartVisible)}>
        {/* Nút hiển thị giỏ hàng */}
      </button>
      <div className="cart" style={{ right: cartVisible ? "0" : "-100%" }}>
        <button className="close" onClick={() => setCartVisible(false)}>
          Close
        </button>
        <div className="listCart">
          {listCart.map((product) => (
            <div key={product.id} className="item">
              <img src={product.image} alt={product.name} />
              <div className="content">
                <div className="name">{product.name}</div>
                <div className="price">${product.price} / 1 product</div>
              </div>
              <div className="quantity">
                <button onClick={() => changeQuantity(product.id, "-")}>
                  -
                </button>
                <span className="value">{product.quantity}</span>
                <button onClick={() => changeQuantity(product.id, "+")}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="totalQuantity">{totalQuantity}</div>
      </div>
      <div className="listProduct">
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            onAddToCart={addCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
