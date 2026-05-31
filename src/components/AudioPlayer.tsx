"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import YouTube, { type YouTubePlayer } from "react-youtube";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(30);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onReady = useCallback((e: { target: YouTubePlayer }) => {
    playerRef.current = e.target;
    e.target.mute();
    e.target.setVolume(volume);
    e.target.playVideo();
    setReady(true);
  }, [volume]);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) {
      p.pauseVideo();
    } else {
      p.playVideo();
    }
    setPlaying(!playing);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    const p = playerRef.current;
    if (!p) return;
    if (val === 0) {
      p.mute();
    } else {
      p.unMute();
      p.setVolume(val);
    }
  };

  return (
    <>
      <div className="fixed -left-[9999px] top-0 pointer-events-none">
        <YouTube
          videoId="lv00MdpnXtw"
          opts={{
            width: 1,
            height: 1,
            playerVars: {
              autoplay: 1,
              loop: 1,
              playlist: "lv00MdpnXtw",
              controls: 0,
              disablekb: 1,
              fs: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
            },
          }}
          onReady={onReady}
        />
      </div>
      {ready && (
        <div className="fixed bottom-20 left-4 z-50 flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
          <button
            onClick={togglePlay}
            className="text-muted hover:text-foreground transition-colors shrink-0"
            title={playing ? "Pausar" : "Reproducir"}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolume}
            className="w-16 h-1 accent-indigo-500 cursor-pointer"
            title="Volumen"
          />
        </div>
      )}
    </>
  );
}
