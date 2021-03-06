import React from "react";
import LoadingSpinner from "./LoadingSpinner";
// import classes from "./components/LoadingSpinner.css";

const Song = (props) => {
  return (
    <div className={props.className} onClick={props.onSelectSong}>
      {!props.currentSong && (
        <>
          <LoadingSpinner />
          <p>Loading...</p>
        </>
      )}
      {props.currentSong && (
        <>
          <div className="col-6">
            <img
              src={props.currentSong.cover.src}
              alt={props.currentSong.cover.alt}
            ></img>
          </div>
          <div className="song-desc col-6">
            <h2>{props.currentSong.name}</h2>
            <h2>{props.currentSong.artist}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Song;
