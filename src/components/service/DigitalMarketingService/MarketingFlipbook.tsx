"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import insta1 from "../../../../public/assets/img/project-img/page01.webp";
import insta2 from "../../../../public/assets/img/project-img/page02.webp";
import insta3 from "../../../../public/assets/img/project-img/page03.webp";
import insta4 from "../../../../public/assets/img/project-img/page04.webp";
import insta5 from "../../../../public/assets/img/project-img/page05.webp";
import insta6 from "../../../../public/assets/img/project-img/page06.webp";

/**
 * Advanced Realistic Flipbook Component
 * Every sheet has a front and back page.
 */
const MarketingFlipbook = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSheetIndex, setCurrentSheetIndex] = useState(0);
  const [flippedSheets, setFlippedSheets] = useState<number[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1 sheet = 2 pages. We have 8 images, so 4 sheets.
  const sheets = useMemo(() => [
    { id: "marketing-sheet-1", front: insta1, back: insta2 },
    { id: "marketing-sheet-2", front: insta3, back: insta4 },
    { id: "marketing-sheet-3", front: insta5, back: insta6 },
  ], []);

  const flipNext = () => {
    if (isFlipping || currentSheetIndex >= sheets.length) return;
    setIsFlipping(true);
    playFlipSound();
    setFlippedSheets((prev) => [...prev, currentSheetIndex]);
    setCurrentSheetIndex(currentSheetIndex + 1);
    setTimeout(() => setIsFlipping(false), 800);
  };

  const flipBack = () => {
    if (isFlipping || currentSheetIndex <= 0) return;
    setIsFlipping(true);
    playFlipSound();
    const targetIndex = currentSheetIndex - 1;
    setFlippedSheets((prev) => prev.filter(idx => idx !== targetIndex));
    setCurrentSheetIndex(targetIndex);
    setTimeout(() => setIsFlipping(false), 800);
  };

  const playFlipSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => { });
    }
  };

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAutoOpened) {
          setTimeout(() => {
            flipNext();
            setHasAutoOpened(true);
          }, 800);
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAutoOpened, currentSheetIndex, sheets.length]);

  // Pre-hydration placeholder to avoid mismatch
  if (mounted === false) {
    return (
      <section ref={sectionRef} className="tp-flipbook-area pt-120 pb-120 bg-black overflow-hidden">
        <div className="container">
          <div className="flipbook-outer" style={{ minHeight: '625px' }}>
            {/* Loading placeholder */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="tp-flipbook-area pt-120 pb-120 bg-black">
      <audio ref={audioRef} src="/assets/audio/page-flip.mp3" preload="auto">
        <track kind="captions" />
      </audio>

      <div className="container">


        <div className="flipbook-outer p-relative">
          {/* Nav Arrows - Moved outside viewport for better responsiveness */}
          <button className="book-nav prev" onClick={flipBack} disabled={currentSheetIndex === 0 || isFlipping}>‹</button>
          <button className="book-nav next" onClick={flipNext} disabled={currentSheetIndex === sheets.length || isFlipping}>›</button>

          <div className="flipbook-viewport">
            <div className="book-actual">
              {/* Spine */}
              <div className="book-spine"></div>

              {/* Individual Sheets */}
              {sheets.map((sheet, idx) => (
                <button
                  key={sheet.id}
                  type="button"
                  className={`sheet ${flippedSheets.includes(idx) ? "flipped" : ""}`}
                  style={{ zIndex: sheets.length - idx, background: 'transparent', border: 'none', padding: 0, outline: 'none', textAlign: 'left' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (flippedSheets.includes(idx)) flipBack();
                    else flipNext();
                  }}
                >
                  <span className="face front">
                    <Image src={sheet.front} alt={`Page ${idx * 2 + 1}`} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    <span className="page-shadow"></span>
                    <span className="page-corner"></span>
                  </span>
                  <span className="face back">
                    <Image src={sheet.back} alt={`Page ${idx * 2 + 2}`} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    <span className="page-shadow"></span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="book-dots mt-80">
            {sheets.map((sheet, i) => (
              <button
                key={`indicator-${sheet.id}`}
                type="button"
                className={`dot ${i === currentSheetIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isFlipping) return;
                  if (i > currentSheetIndex) flipNext();
                  if (i < currentSheetIndex) flipBack();
                }}
              />
            ))}
            <button
              key="indicator-marketing-last"
              type="button"
              className={`dot ${sheets.length === currentSheetIndex ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (isFlipping) return;
                const lastIdx = sheets.length;
                if (lastIdx > currentSheetIndex) flipNext();
                if (lastIdx < currentSheetIndex) flipBack();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFlipbook;
