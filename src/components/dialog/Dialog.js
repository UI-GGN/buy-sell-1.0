import React, {useState} from "react";
import './styles/dialogStyles.css';

const Dialog = ({setShowDialog, ...props}) => {

    return(
        <>
            <div 
            onClick={() => {setShowDialog(false)}}
            className="dialogBackground"
            >
                <div
                onClick={(e) => {e.stopPropagation()}}
                className="dialog"
                >
                    <div
                    className="close-container"
                    >
                        <button
                        className="dialog-close"
                        onClick={() => {setShowDialog(false)}}
                        >
                            X
                        </button>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Dialog;