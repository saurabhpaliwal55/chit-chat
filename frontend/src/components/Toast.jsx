import React, { useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Toast = ({ message }) => {
  const [open, setOpen] = useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={message}
        key={vertical + horizontal}
        action={[
          <IconButton key="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      >
        <Alert  severity="warning" onClose={handleClose} sx={{width:"30vw"}}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Toast;
