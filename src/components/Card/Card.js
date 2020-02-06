import React, { useState, useEffect } from "react";
import InfoForm from "../InfoForm/InfoForm";
import "../../App.css";
import "./style.css";

const Card = props => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio, setAudio] = useState(null);
  const [openInfo, setOpenInfo] = useState(false);

  // если в пропсах есть stopPrevAudio:
  // при клике останавливаем предыдущее аудио,
  // записываем текущее - если play, null - если pause
  // если stopPrevAudio нет, то используем свой state

  const [source, setSource] = useState(null);
  const [src] = useState(
    `https://t-rbt.telesens.ua/t-rbt/sound?id=${props.elem.contentNo}&type=public`
  );
  const [error, setError] = useState(false);

  const togglePlay = () => {
    if (props.stopPrevAudio) {
      if (!props.isPlayed) {
        audio.play();
        props.stopPrevAudio(audio, props.elem.contentNo);
      } else {
        audio.pause();
        audio.currentTime = 0;
        props.stopPrevAudio(null, null);
      }
    } else {
      if (!isPlayed) {
        setIsPlayed(true);
        audio.play();
      } else {
        setIsPlayed(false);
        audio.pause();
        audio.currentTime = 0;
      }
    }
  };

  // показываем модальное окно с детальной информациейб
  // останавливаем проигрывание мелодии

  const showInfo = () => {
    props.stopPrevAudio(null, null);
    setOpenInfo(true);
  };

  // аудио-дорожка

  const showProgress = () => {
    setProgress(audio.currentTime);
    if (audio.currentTime >= 15) {
      setProgress(0);
      setIsPlayed(false);
      props.stopPrevAudio(null, null);
    }
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  // проверяем, есть ли мелодия: если нет,- ставим флаг и не выводим плеер

  useEffect(() => {
    if (source) {
      source.src = src;
      source.onerror = () => {
        setError(true);
      };
    }
  }, [source, src]);

  return (
    <div className="card-item">
      {!error ? (
        <div>
          <div
            className={
              props.stopPrevAudio
                ? !!props.isPlayed
                  ? "container pause"
                  : "container play"
                : !!isPlayed
                ? "container pause"
                : "container play"
            }
            onClick={togglePlay}
          >
            <img
              className="card-image"
              src={
                "https://t-rbt.telesens.ua/t-rbt/image?id=" + props.elem.imageId
              }
              alt=""
            />
            <audio ref={node => setAudio(node)} onTimeUpdate={showProgress}>
              <source src={src} ref={node => setSource(node)} />
            </audio>
          </div>
          <progress className="progress" max="15" value={progress} />
        </div>
      ) : (
        <div>
          <div className="container">
            <image
              className="card-image"
              src={
                "https://t-rbt.telesens.ua/t-rbt/image?id=" + props.elem.imageId
              }
              alt=""
            />
          </div>
          <progress className="progress hidden" max="15" value={progress} />
        </div>
      )}
      <div className="description">
        <div
          className={props.elem.title.length > 20 ? "title marquee" : "title"}
        >
          <span>{props.elem.title}</span>
        </div>
        <div className="card-item-artist">{props.elem.artist}</div>
        {// если страница "Мой профиль",- появляются доп. элементы

        !props.myProfile && <div className="small">Single</div>}
      </div>
      {props.myProfile && (
        <div className="btn" onClick={showInfo}>
          <i className="fa fa-info"></i>
        </div>
      )}
      <InfoForm
        open={openInfo}
        handleClose={handleCloseInfo}
        elem={props.elem}
      />
    </div>
  );
};

export default Card;
