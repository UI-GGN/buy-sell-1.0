const initialState = {
  products: {
    byId: {},
    allIds: [],
  },
  wishlist: [],
  cart: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      let s = JSON.parse(JSON.stringify(state));
      const entry = {};
      for (const item of action.payload) {
        s.products.allIds.push(item.id);
        entry[item.id] = {
          name: item.name,
          image: item.image,
          price: item.price,
          description: item.description,
          tags: item.tags,
        };
      }
      s.products.byId = entry;
      s.products.allIds = [...new Set(s.products.allIds)];
      return s;
    }
    case "LOAD_CART": {
      let s = JSON.parse(JSON.stringify(state));
      for (const id of action.payload.items) {
        s.cart[id] = action.payload.count.id;
      }
      return s;
    }
    case "LOAD_WISHLIST": {
      let s = JSON.parse(JSON.stringify(state));
      for (const id of action.payload) {
        s.wishlist.push(id);
      }
      s.wishlist = [...new Set(s.wishlist)];
      return s;
    }

    default:
      return state;
  }
};

export default productReducer;
