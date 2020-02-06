import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../App.css";
import "./style.css";

const PurchaseForm = props => {
  const user = props.login && props.login.subscriber.subsIdent;

  // покупаем мелодию, авторизуемся для обновления профиля

  const handlePurchase = () => {
    props.purchase(user, props.passw, props.elem.contentNo);
    props.handleClose();
  };

  return (
    <Dialog
      className="purchase-form"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Content purchase</DialogTitle>
      <DialogContent>
        <p>{`Title: ${props.elem.title}`}</p>
        <p>{`Artist: ${props.elem.artist || "unknown"}`}</p>
        <p>{`Price: $${props.elem.priceModelNo}`}</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          variant="outlined"
          color="secondary"
        >
          Cancel
        </Button>
        <Button onClick={handlePurchase} variant="outlined" color="primary">
          Purchase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseForm;
