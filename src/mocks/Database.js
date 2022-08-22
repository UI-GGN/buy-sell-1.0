export const Database = {
  Buyers: [
    {
      username: "buyer-1",
      name: "Buyer 1",
      email: "buyer.1@gmail.com",
      phone: "6383030256",
      password: "!123Buyer",
    },
  ],
  Sellers: [
    {
      username: "seller-1",
      name: "Seller 1",
      email: "seller.1@gmail.com",
      phone: "6383030256",
      password: "!123Seller",
    },
  ],
};

export const Wishlist = {
  "buyer-1": [],
  "seller-1": [],
};

export const Cart = {
  "buyer-1": { items: [], count: {} },
  "seller-1": { items: [], count: {} },
};
