import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../App.css';
import './style.css';

let AuthForm = props => {
  const [tel, setTel] = useState("");
  const [passw, setPassw] = useState("");
  const [telErr, setTelErr] = useState(false);
  const [passwErr, setPasswErr] = useState(false);

  const handleCancel = () => {
    setTel("");
    setPassw("");
    setTelErr(false);
    setPasswErr(false);
    props.handleClose();
  };

  const handleLogin = () => {
    if (tel.match(/^\d{10,12}$/g) && passw.match(/^\w{4,12}$/g)) {
      props.authorize(tel, passw);
      setTel("");
      setPassw("");
      setTelErr(false);
      setPasswErr(false);
      props.handleClose();
    } else {
      if (!tel.match(/^\d{10,12}$/g)) {
        setTelErr(true);
      }
      if (!passw.match(/^\w{4,12}$/g)) {
        setPasswErr(true);
      }
    }
  };

  const onChangeTel = e => {
    setTel(e.target.value);
    setTelErr(false);
  };

  const onChangePassw = e => {
    setPassw(e.target.value);
    setPasswErr(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Authorizate</DialogTitle>
      <DialogContent>
        <div className="input-field">
          <TextField
            id="tel"
            label="Telephone"
            value={tel}
            variant="outlined"
            error={telErr}
            helperText={telErr ? "Incorrect entry" : ""}
            onChange={e => onChangeTel(e)}
            autoFocus
          />
        </div>
        <div className="input-field">
          <TextField
            id="passw"
            type="password"
            label="Password"
            value={passw}
            variant="outlined"
            error={passwErr}
            helperText={passwErr ? "Incorrect entry" : ""}
            onChange={e => onChangePassw(e)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogin} variant="outlined" color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthForm;
