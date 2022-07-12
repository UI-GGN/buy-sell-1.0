import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
        loginForm: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            '& div': {
                display: "flex",
                justifyContent: "space-around",
                alignContent: "center",
                margin:"10px, 20px"
            }
        },
        formContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "500px",
            marginBlockStart: "20px",
            '& #signInText': {
                margin: "10px"
            }
        },
        iconsContainer: {
            display: "flex",
            justifyContent: "center",
            color: "#125FD2"
        },
        icon: {
            width: "10px",
            margin: "10px 20px"
        },
        formButton: {
            padding: "10px, 25px",
            fontWeight: "bold"
        }
    })
);