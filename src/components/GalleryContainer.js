import React, { useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { authorize, purchase } from "../store/actions";
import GalleryItem from "./GalleryItem/GalleryItem";
import "../App.css";

const mapStateToProps = state => ({
  login: state.login,
  passw: state.passw
});

const mapDispatchToProps = {
  authorize,
  purchase
};

const Gallery = props => {
  const [audio, setAudio] = useState(null);
  const [audioNo, setAudioNo] = useState(null);

  // останавливаем предыдущее аудио, устанавливаем текущее или null (если его нет)
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
      {// если есть результат поиска и контент: выводим на странице

      !!props.search ? (
        !!props.search.content ? (
          <div>
            <p>Result for {props.search.title}</p>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="baseline"
            >
              {props.search.content.map(elem => (
                <GalleryItem
                  key={elem.contentNo}
                  elem={elem}
                  login={props.login}
                  passw={props.passw}
                  authorize={props.authorize}
                  purchase={props.purchase}
                  isPaused={elem.contentNo === audioNo}
                  stopPrevAudio={(newAudio, contentNo) =>
                    stopPrevAudio(newAudio, contentNo)
                  }
                />
              ))}
            </Grid>
          </div>
        ) : (
          <p>No search result</p>
        )
      ) : (
        // если не было поиска на странице, выводим контент поумолчанию (первая категория, первая подкатегория)

        <div>
          <p>
            Content from{" "}
            <span className="green">{`${props.categoryTitle}/${props.subCategoryTitle}`}</span>
          </p>
          {!props.content && <p>There are no songs in this category</p>}
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="baseline"
          >
            {!!props.content &&
              props.content.map(elem => (
                <GalleryItem
                  key={elem.contentNo}
                  elem={elem}
                  login={props.login}
                  passw={props.passw}
                  authorize={props.authorize}
                  purchase={props.purchase}
                  isPlayed={elem.contentNo === audioNo}
                  stopPrevAudio={(newAudio, contentNo) =>
                    stopPrevAudio(newAudio, contentNo)
                  }
                />
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
