import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    cartItems: [],
    products: [
      {
        title: "Converse",
        slug: "rustic-plastic-bacon",
        imageSrc:
          "https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg",
        description: "Dolorem commodi id eveniet neque amet voluptatem ipsa.",
        price: "320.00"
      },
      {
        title: "Vans",
        slug: "ergonomic-cotton-chips",
        imageSrc: "https://media.journeys.com/images/products/1_259094_ZM.JPG",
        description: "Rem et aut.",
        price: "423.00"
      },
      {
        title: "New Balance",
        slug: "licensed-steel-sausages",
        imageSrc:
          "https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg",
        description: "Ipsum expedita at cum porro sit ut.",
        price: "50.00"
      },
      {
        title: "Adidas",
        slug: "gorgeous-concrete-ball",
        imageSrc:
          "https://ae01.alicdn.com/kf/HTB19RO_ox6I8KJjy0Fgq6xXzVXaS/Original-New-Arrival-Adidas-NEO-Label-Men-s-Skateboarding-Shoes-Sneakers.jpg",
        description:
          "Reiciendis est minus blanditiis repellendus veritatis amet numquam nam.",
        price: "39.00"
      }
    ]
  };

  handleAddToCart = product => {
    let { cartItems } = this.state;

    const alreadyExists = cartItems.some(
      item => item.product.slug === product.slug
    );

    if (alreadyExists) {
      cartItems = cartItems.map(item => {
        if (item.product.slug === product.slug) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      cartItems.push({
        product,
        quantity: 1
      });
    }
    this.setState({ cartItems });
  };

  handleRemoveItemFromCart = currentItem => {
    let { cartItems } = this.state;
    cartItems = cartItems
      .map(cartItem => {
        if (cartItem.product.slug === currentItem.product.slug) {
          cartItem.quantity = cartItem.quantity - 1;
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.quantity > 0);
    this.setState({ cartItems });
  };

  render() {
    const { products, cartItems } = this.state;

    return (
      <div className="container">
        <Navbar />
        <div className="columns">
          <div className="column is-two-thirds">
            <div>
              <h3 className="title is-4">Our Products</h3>
              <div className="columns">
                {products.map((product, i) => (
                  <Product
                    key={i}
                    product={product}
                    handleAddToCart={this.handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
          <ShoppingCart
            cartItems={cartItems}
            handleRemoveItemFromCart={this.handleRemoveItemFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
