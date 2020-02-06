import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import "../../App.css";
import "./style.css";

const MyProfile = props => {
  const [autoprolong, setAutoprolong] = useState(true);
  const [audio, setAudio] = useState(null);
  const [audioNo, setAudioNo] = useState(null);

  // останавливаем предыдущее аудио, записываем в state текущее или null (если его нет)
  // передаем в пропсы каждой карточки галереи

  const stopPrevAudio = (newAudio, contentNo) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setAudio(newAudio);
    setAudioNo(contentNo);
  };

  return (
    <div>
      <h3>Content</h3>
      <Grid container direction="row" justify="center" alignItems="baseline">
        {// выводим подписки

        props.login.playCondition &&
          props.login.playCondition.map(
            elem =>
              elem.contentItem && (
                <div
                  key={elem.contentItem.contentNo}
                  className="purchased-item"
                >
                  <Card
                    elem={elem.contentItem}
                    myProfile={true}
                    isPlayed={elem.contentItem.contentNo === audioNo}
                    stopPrevAudio={stopPrevAudio}
                  />
                  <div className="info">
                    <div className="info-text">
                      <p>Content type: single</p>
                      <p>
                        {`Date of purchase: ${elem.createdDt.day}/${elem.createdDt.month}/${elem.createdDt.year} 
												${elem.createdDt.hour}:${elem.createdDt.minute}:${elem.createdDt.second}`}
                      </p>
                      <p>Paid period of validity: 10 days</p>
                      <div className="checkbox-field">
                        <input
                          id="autoprolong"
                          type="checkbox"
                          checked={autoprolong}
                          value="autoprolongation"
                          onChange={() => setAutoprolong(false)}
                        />
                        <label htmlFor="autoprolong">autoprolongation</label>
                      </div>
                      <button type="button">Remove content</button>
                    </div>
                  </div>
                </div>
              )
          )}
      </Grid>
    </div>
  );
};

export default MyProfile;
