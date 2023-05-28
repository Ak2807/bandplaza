import React, { useState } from 'react'

import {Songs} from"./Songs";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';

import MusicPlayer from './MusicPlayer';


function SongsList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
<>
    <div className="songs-list">
    <h2 className="title">
      The list <span>16 songs</span>
    </h2>

    <div className="songsContainer">
      {Songs &&
        Songs.map((song, index) => (
          <div
            className="songs"
            key={song?.id}
            onClick={() => setMainSong(song?.song, song?.imgSrc)}
          >
            <div className="count">
              <p>{`#${index + 1}`}</p>
            </div>
            <div className="song">
              <div className="imgBox">
                <img src={song?.imgSrc} alt="" />
              </div>
              <div className="section">
                <p className="songName">
                  {song?.songName}{" "}
                  <span className="songSpan">{song?.bandName}</span>
                </p>

                <div className="hits">
                  <p className="hit">
                    <i>
                      <FaHeadphones />
                    </i>
                    
                  </p>

                  <p className="duration">
                    <i>
                      <FaRegClock />
                    </i>
                    03:04
                  </p>
                  <div
                    className="favourite"
                    onClick={() => changeFavourite(song?.id)}
                  >
                    {song?.favourite ? (
                      <i>
                        <FaHeart />
                      </i>
                    ) : (
                      <i>
                        <FaRegHeart />
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

    </div>

    <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
  </div>

</>
);
}

export {SongsList}