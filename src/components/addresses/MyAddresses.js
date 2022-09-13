import React, { useEffect, useState } from "react";
import AddAddressDialog from "../dialog/addAddressDialog/AddAddressDialog";
import { deleteAddress } from "../../services/addressService";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./address.css";
import { useSelector } from "react-redux";

const MyAddresses = () => {
  const addresses = useSelector((state) => state.addressReducer.addresses);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAddress, setCurrentAddress] = useState();
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    setEditAddress(false);
  });

  return (
    <section className="stack">
      <div className="add-address-button-container">
        <h2>Saved Addresses</h2>
        <button
          className="button add-address-button"
          onClick={() => setOpenDialog(true)}
        >
          Add address
        </button>
      </div>
      {addresses.length === 0 ? (
        <div className="empty-container">
          {/* <ProductionQuantityLimitsIcon className="empty-icon" /> */}
          <p>You don&apos;t have any address saved. Please add to view here</p>
        </div>
      ) : (
        <div>
          {addresses.map((address, index) => {
            return (
              <div key={index} className="individual-address-container">
                <div>
                  <h4>{address.name}</h4>
                  <p>{address.flat}</p>
                  <p>{address.area}</p>
                  <p>
                    {address.city}, {address.state}
                  </p>
                  <p>Pincode: {address.pincode}</p>
                  <div className="address-ph">
                    <p>Phone Number: </p>
                    <h4>{address.phone}</h4>
                  </div>
                </div>
                <div>
                  <div className="address-actions-button-container">
                    <button
                      className="icon-button"
                      onClick={() => {
                        setCurrentAddress(address);
                        setEditAddress(true);
                        setOpenDialog(true);
                        //setTimeout(() => setCurrentAddress(""), 2000);
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="icon-button"
                      onClick={() => deleteAddress(address)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  {/* <button className="text-button set-as-default-button">Set as default</button> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {openDialog && (
        <AddAddressDialog
          setOpenDialog={setOpenDialog}
          edit={editAddress}
          currentAddress={currentAddress}
        />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default MyAddresses;
