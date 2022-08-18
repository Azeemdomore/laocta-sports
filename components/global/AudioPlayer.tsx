import React, { useState, useRef, useEffect } from "react";
import * as Icons from "@/components/global/Icons";
import cn from "classnames";
import { useAudioPlayer } from "@/components/global/useAudioPlayer";

type Props = {
  showPlayer?: boolean;
};

const AudioPlayer: React.FC<Props> = ({ showPlayer }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  let [audioVol, _setAudioVol] = useState<number>(0.5);
  let [audioLoop, setAudioLoop] = useState<Boolean>(false);

  const audioPlayer = useRef<any>(null);
  const progressBar = useRef<any>(null);
  const animationRef = useRef<any>(null);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  // const enableLoop = () => {
  //   let x = document.getElementById("audio-player");
  //   // @ts-ignore
  //   x.loop = true;
  //   // @ts-ignore
  //   x.load();
  // };
  const { onLoadedMetadata } = useAudioPlayer(audioPlayer, progressBar);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    // @ts-ignore
    document.getElementById("audio-player").volume = audioVol;

    console.log(!isNaN(duration));
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    audioVol,
  ]);

  return (
    <>
      <div
        className={cn(
          "bg-secondary audioPlayer w-full z-[9999999] md:h-[143px] items-center justify-center lg:p-5 md:p-5 p-[6px] fixed duration-500 ease-in-out",
          {
            "top-0 duration-500 ease-in-out": showPlayer,
            "md:-top-[143px] -top-[175px] duration-500 ease-in-out":
              !showPlayer,
          }
        )}
      >
        <div className="flex lg:flex-row flex-col justify-between items-center h-full md:gap-0 sm:gap-3">
          <audio
            ref={audioPlayer}
            src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            preload="metadata"
            id="audio-player"
            onLoadedMetadata={onLoadedMetadata}
          ></audio>

          <div className="flex md:items-center justify-between h-full xl:w-11/12 lg:w-[87%] w-full md:flex-row flex-col md:gap-0 sm:gap-3 gap-2">
            <div className="flex gap-2 items-center">
              <img src="/img/playerIcon.png" alt="" />
              <p className="text-white flex flex-col text-[15px] font-normal">
                Escuchando ahora
                <span>80’S @ 8:00</span>
              </p>
            </div>
            <div className="flex items-center justify-end md:gap-10 sm:gap-4 gap-2 md:flex-row flex-col-reverse xl:w-4/5 lg:w-3/4 md:w-[70%] w-full">
              <div className="flex items-center lg:gap-5 sm:gap-2 gap-4">
                <Icons.PrevBtn />
                <button
                  onClick={togglePlayPause}
                  className="flex justify-center items-center"
                >
                  {isPlaying ? (
                    <span className="lg:h-[60px] h-[45px] lg:w-[60px] w-[45px] lg:p-0 p-3 rounded-full bg-gradient-to-t from-[#7EB594] via-[#2EA3A7] to-[#459E94] flex justify-center items-center">
                      <Icons.PauseBtn />
                    </span>
                  ) : (
                    <span className="lg:h-[60px] h-[45px] lg:w-[60px] w-[45px] lg:p-0 p-3 rounded-full bg-gradient-to-t from-[#7EB594] via-[#2EA3A7] to-[#459E94] flex justify-center items-center">
                      <Icons.PlayBtn />
                    </span>
                  )}
                </button>
                <Icons.NextBtn />
              </div>
              <div className="flex items-center lg:gap-5 gap-3 h-full">
                <div className="text-white text-[12px]">
                  {calculateTime(currentTime)}
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    className="progressBar"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                  />
                </div>
                <p className="duration text-white text-[12px]">
                  {duration && !isNaN(duration) && calculateTime(duration)}
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex hidden gap-5 items-center justify-end lg:w-[10%] w-full">
            <div className="cursor-pointer">
              <Icons.RepeatBtn />
            </div>
            <Icons.PlaylistMenu />
          </div>
          <div className="md:hidden flex gap-3 items-center justify-end w-full">
            <Icons.RepeatBtnMob />
            <Icons.PlaylistMenuMob />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
