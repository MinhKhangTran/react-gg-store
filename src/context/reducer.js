export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter((newItem) => newItem.amount !== 0)
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        })
      };

    case "ADD_TO_CART":
      //console.log(action.payload);
      const { id, name: title } = action.payload;
      const { name: image } = action.payload.images[0];
      // console.log(title, image);
      let randomPreis = Math.floor(Math.random() * 20);
      let product = { id, title, image, price: randomPreis, amount: 1 };
      return { ...state, cart: [...state.cart, product] };

    default:
      return state;
  }
};
