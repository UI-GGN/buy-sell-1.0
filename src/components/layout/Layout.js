import React from "react";
import {Box} from "@material-ui/core";
import Login from '../login/Login';
import DynamicForm from "../dynamicForm/dynamicForm";

const Layout = () => {
    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <DynamicForm/>
        </Box>
    )
};

export default Layout;