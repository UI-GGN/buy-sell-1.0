import React from "react"
import "../dialog.css"
import Dialog from "../Dialog"

const InfoDialog = ({ isLoggedIn, setShowDialog }) => {
    return (
        <Dialog setShowDialog={setShowDialog}>
            {!isLoggedIn && <p>Please register or login to view the details</p>}
        </Dialog>
    )
}

export default InfoDialog
