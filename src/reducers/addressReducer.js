const initialState = {
  addresses: [],
  selectedAddress: 0,
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
    case "UPDATE_SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddress: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
