import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "../../App.css";
import "./style.css";

const MessageForm = props => {
  return (
    <Dialog
      className="message-form"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText>{props.message || props.error}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} variant="outlined" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageForm;
