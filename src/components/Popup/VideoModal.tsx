import React from "react";

 interface IProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
};

const VideoModal: React.FC<IProps> = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <button 
      id="video-overlay" 
      className="video-overlay open" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      type="button"
      aria-label="Close video modal"
    >
      <div className="video-modal-content">
        <iframe
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          className="video-iframe"
          title="Video Player"
        />
      </div>
    </button>
  );
};

export default VideoModal;
