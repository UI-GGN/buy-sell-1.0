const initialState = {
  addresses: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ADDRESSES": {
      let s = JSON.parse(JSON.stringify(state));
      s.addresses = [];
      for (const address of action.payload) {
        s.addresses.push(address);
      }
      return s;
    }

    default:
      return state;
  }
};

export default addressReducer;
