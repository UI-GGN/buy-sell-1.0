import { toast } from "react-toastify";
import { loadAddresses } from "../reducers/actionCreators";
import store from "../store";

const username = localStorage.getItem("username");
const addresses = JSON.parse(localStorage.getItem("addresses"));
const dispatch = store.dispatch;

export const addAddress = (address) => {
  //address.id = addresses[username].length;
  //if(address.default_address || address.length === 0) setAddressAsDefault(address.id);
  addresses[username].push(address);
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  toast.info("Address has been added");
};

export const deleteAddress = (address) => {
  const index = addresses[username].indexOf(address);
  addresses[username].splice(index, 1);
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  toast.info("Address has been deleted");
};

// export const setAddressAsDefault = (id) => {
//   localStorage.setItem("default_address", id);
// }
