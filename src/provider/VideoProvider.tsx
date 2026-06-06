"use client";
import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface VideoContextType {
  isVideoOpen: boolean;
  videoUrl: string;
  playVideo: (videoId: string, platform?: "youtube" | "vimeo") => void;
  closeVideo: () => void;
}

const VideoContext = createContext<VideoContextType>({
  isVideoOpen: false,
  videoUrl: "",
  playVideo: () => {},
  closeVideo: () => {}
});

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const playVideo = useCallback((videoId: string, platform: "youtube" | "vimeo" = "youtube") => {
    const url = platform === "youtube"
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    setVideoUrl(url);
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setVideoUrl("");
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  const contextValue = useMemo(() => ({
    isVideoOpen,
    videoUrl,
    playVideo,
    closeVideo
  }), [isVideoOpen, videoUrl, playVideo, closeVideo]);

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    
      {isVideoOpen && (
        <div className="video-modal-overlay">
          {/* Click outside to close */}
          <button 
            className="video-modal-backdrop" 
            onClick={handleBackdropClick}
            aria-label="Close video modal"
            type="button"
          ></button>
          
          <div className="video-modal-container">
            <button 
              onClick={closeVideo}
              className="video-modal-close"
              aria-label="Close video modal"
            >
              ×
            </button>
            <iframe
              src={videoUrl}
              className="video-modal-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video player"
            ></iframe>
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);