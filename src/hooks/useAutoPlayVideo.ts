"use client";

import { useEffect, useRef, useState } from 'react';

const useAutoPlayVideo = (videoSrc: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Video Setup
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Helper to handle user interaction for autoplay
    const handleInteraction = () => {
      video.play().catch(() => {});
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    // Autoplay Strategy
    const playVideo = () => {
      video.play()
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('Autoplay started successfully');
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('Autoplay prevented:', error);
          document.addEventListener('click', handleInteraction);
          document.addEventListener('touchstart', handleInteraction);
        });
    };

    // Video visibility check with Intersection Observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    observer.observe(video);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      observer.disconnect();
    };
  }, [videoSrc]);

  return {
    videoRef,
    isPlaying
  };
};

export default useAutoPlayVideo;