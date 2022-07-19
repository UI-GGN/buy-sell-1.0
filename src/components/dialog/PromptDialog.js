import React, {useState} from "react";
import './styles/dialogStyles.css';
import Dialog from "./Dialog";
import Button from "../custom/Button";

const PromptDialog = ({isLogin, setShowDialog}) => {

    return(
        <Dialog setShowDialog={setShowDialog}>
            {isLogin ? <p>Login as a seller or buyer?</p> : <p>Register as a seller or buyer?</p>}
            <div id="button-container">
                <Button>Seller</Button>
                <Button>Buyer</Button>
            </div>
        </Dialog>
    )
}

export default PromptDialog;