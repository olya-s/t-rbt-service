import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "../Card/Card";
import "../../App.css";
import "./style.css";

const InfoForm = props => {
  return (
    <Dialog
      className="info-form"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Informaton</DialogTitle>
      <DialogContent className="layout-row">
        <Card elem={props.elem} />
        <div className="info-card">
          <p>{`Title: ${props.elem.title}`}</p>
          <p>{`Artist: ${props.elem.artist || "unknown"}`}</p>
          <p>{`Copyrght: ${props.elem.copyright}`}</p>
          {props.elem.priceModelNo && (
            <p>{`Purchase price: $${props.elem.priceModelNo}`}</p>
          )}
          {props.elem.amountPeriodic && (
            <p>{`Prolongation price: $${props.elem.amountPeriodic}`}</p>
          )}
          {props.elem.chargePeriod && (
            <p>{`Charge period (days): ${props.elem.chargePeriod}`}</p>
          )}
          <p>
            Link:{" "}
            <span>{`https://t-rbt.telesens.ua/t-rbt/?id=${props.elem.contentNo}`}</span>
          </p>
          <p>{`ID: ${props.elem.contentNo}`}</p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} variant="outlined" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoForm;
