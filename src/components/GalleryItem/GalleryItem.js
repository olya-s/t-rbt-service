import React, { useState } from "react";
import Card from "../Card/Card";
import AuthForm from "../AuthForm/AuthForm";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import InfoForm from "../InfoForm/InfoForm";
import "../../App.css";
import "./style.css";

const GalleryItem = props => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openPurchase, setOpenPurchase] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  // открываем модальное окно покупки или авторизации, если пользователь не авторизован;
  // при открытии модальных окон останавливаем проигрывание мелодии

  const openPurchaseForm = () => {
    props.stopPrevAudio(null, null);
    if (!props.login) {
      setOpenAuth(true);
    } else {
      setOpenPurchase(true);
    }
  };

  const handleOpenInfo = () => {
    setOpenInfo(true);
    props.stopPrevAudio(null, null);
  };

  const handleCloseAuth = () => {
    setOpenAuth(false);
  };

  const handleClosePurchase = () => {
    setOpenPurchase(false);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <div className="gallery-item">
      <Card
        elem={props.elem}
        stopPrevAudio={props.stopPrevAudio}
        isPlayed={props.isPlayed}
      />
      <div className="gallery-item-footer">
        <span>${props.elem.priceModelNo}</span>
        <div className="btn-block">
          <div className="btn" onClick={openPurchaseForm}>
            <i className="fa fa-shopping-basket"></i>
          </div>
          <div className="btn">
            <i className="fa fa-gift"></i>
          </div>
          <div className="btn" onClick={handleOpenInfo}>
            <i className="fa fa-info"></i>
          </div>
        </div>
      </div>
      <AuthForm
        open={openAuth}
        handleClose={handleCloseAuth}
        authorize={props.authorize}
      />
      <PurchaseForm
        open={openPurchase}
        handleClose={handleClosePurchase}
        purchase={props.purchase}
        authorize={props.authorize}
        elem={props.elem}
        login={props.login}
        passw={props.passw}
      />
      <InfoForm
        open={openInfo}
        handleClose={handleCloseInfo}
        elem={props.elem}
      />
    </div>
  );
};

export default GalleryItem;
