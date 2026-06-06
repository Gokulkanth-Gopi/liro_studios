"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowSvg, ButtonBlurFilter } from '@/svg';

const CODE_LINES = [
    { id: "cl-1", text: '<section class="hero">', color: '#70c6e1', indent: 0 },
    { id: "cl-2", text: '  <nav class="navbar">', color: '#69c45b', indent: 0 },
    { id: "cl-3", text: '    <a href="/">Liro Studios</a>', color: 'rgba(255,255,255,0.6)', indent: 0 },
    { id: "cl-4", text: '  </nav>', color: '#69c45b', indent: 0 },
    { id: "cl-5", text: '  <div class="hero__content">', color: '#70c6e1', indent: 0 },
    { id: "cl-6", text: '    <h1>360° Marketing</h1>', color: '#69c45b', indent: 0 },
    { id: "cl-7", text: '    <p>Creative Partner</p>', color: 'rgba(255,255,255,0.5)', indent: 0 },
    { id: "cl-8", text: '    <button>Get Started</button>', color: '#3f5493', indent: 0 },
    { id: "cl-9", text: '  </div>', color: '#70c6e1', indent: 0 },
    { id: "cl-10", text: '  <div class="hero__images">', color: '#70c6e1', indent: 0 },
    { id: "cl-11", text: '    <img src="branding.webp" />', color: 'rgba(255,255,255,0.5)', indent: 0 },
    { id: "cl-12", text: '    <img src="digital.webp" />', color: 'rgba(255,255,255,0.5)', indent: 0 },
    { id: "cl-13", text: '  </div>', color: '#70c6e1', indent: 0 },
    { id: "cl-14", text: '</section>', color: '#70c6e1', indent: 0 },
    { id: "cl-15", text: '', color: '', indent: 0 },
    { id: "cl-16", text: '<style>', color: '#69c45b', indent: 0 },
    { id: "cl-17", text: '  .hero { background: #060608; }', color: '#3f5493', indent: 0 },
    { id: "cl-18", text: '  h1 { font-size: 8rem; }', color: '#3f5493', indent: 0 },
    { id: "cl-19", text: '  button { color: #69c45b; }', color: '#3f5493', indent: 0 },
    { id: "cl-20", text: '</style>', color: '#69c45b', indent: 0 },
];

// Wireframe blocks that "build" progressively
const WIREFRAME_BLOCKS = [
    { label: 'NAV', h: '44px', bg: 'rgba(112,198,225,0.12)', border: '#70c6e1', delay: 300 },
    { label: 'HERO BANNER', h: '120px', bg: 'rgba(105,196,91,0.08)', border: '#69c45b', delay: 900 },
    { label: 'HEADLINE TEXT', h: '32px', bg: 'rgba(63,84,147,0.15)', border: '#3f5493', delay: 1500 },
    { label: 'PARAGRAPH', h: '20px', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.15)', delay: 2000 },
    { label: 'CTA BUTTON', h: '36px', bg: 'rgba(105,196,91,0.15)', border: '#69c45b', delay: 2500 },
    { label: 'SERVICES GRID', h: '100px', bg: 'rgba(63,84,147,0.10)', border: '#3f5493', delay: 3200 },
    { label: 'FOOTER', h: '48px', bg: 'rgba(112,198,225,0.08)', border: '#70c6e1', delay: 4000 },
];

export default function UnderConstruction() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [visibleBlocks, setVisibleBlocks] = useState<boolean[]>(new Array(WIREFRAME_BLOCKS.length).fill(false));
    const [progress, setProgress] = useState(0);
    const codeRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Animate code lines one by one
    useEffect(() => {
        let lineIdx = 0;
        intervalRef.current = setInterval(() => {
            if (lineIdx < CODE_LINES.length) {
                setVisibleLines(lineIdx + 1);
                lineIdx++;
            } else {
                // loop
                lineIdx = 0;
                setVisibleLines(0);
            }
        }, 220);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    // Auto-scroll code editor
    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.scrollTop = codeRef.current.scrollHeight;
        }
    }, [visibleLines]);

    const setBlockVisible = (i: number) => {
        setVisibleBlocks(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
        });
    };

    const triggerBlockDelay = (delay: number, i: number) => {
        setTimeout(() => setBlockVisible(i), delay);
    };

    // Animate wireframe blocks appearing
    useEffect(() => {
        WIREFRAME_BLOCKS.forEach((block, i) => {
            triggerBlockDelay(block.delay, i);
        });
    }, []);

    // Progress bar — slowly fills over ~8s then loops
    useEffect(() => {
        let p = 0;
        const t = setInterval(() => {
            p += 0.3;
            if (p > 100) p = 0;
            setProgress(p);
        }, 30);
        return () => clearInterval(t);
    }, []);

    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#060608',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Glow blobs */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-10%',
                width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(63,84,147,0.25) 0%, transparent 65%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '-10%', right: '-5%',
                width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, rgba(105,196,91,0.15) 0%, transparent 65%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            {/* Top label */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '28px',
                fontSize: '0.72rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(112,198,225,0.8)',
            }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#69c45b', boxShadow: '0 0 8px #69c45b', animation: 'pulse 1.5s ease-in-out infinite' }} /> Page under development
            </div>

            {/* ── BROWSER WINDOW MOCKUP ── */}
            <div style={{
                width: '100%',
                maxWidth: '1100px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
            }}>
                {/* Browser chrome */}
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                    </div>
                    <div style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '6px',
                        padding: '5px 14px',
                        fontSize: '0.72rem',
                        color: 'rgba(255,255,255,0.4)',
                        display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                        <span style={{ color: '#69c45b', fontSize: '0.6rem' }}>🔒</span> liro.studio / coming-soon
                    </div>
                    <div style={{
                        fontSize: '0.65rem',
                        color: 'rgba(255,255,255,0.25)',
                        letterSpacing: '1px',
                    }}>BUILDING…</div>
                </div>

                {/* Content area: code left, wireframe right */}
                <div className="uc-content-area" style={{ display: 'flex', minHeight: '420px' }}>

                    {/* ── CODE EDITOR PANEL ── */}
                    <div className="uc-code-panel" style={{
                        flex: '0 0 45%',
                        borderRight: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {/* Editor tab */}
                        <div style={{
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.03)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            fontSize: '0.65rem',
                            color: '#69c45b',
                            display: 'flex', alignItems: 'center', gap: '8px',
                        }}>
                            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#69c45b' }} /> index.html{' '}<span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.25)', fontSize: '0.6rem' }}>● unsaved</span>
                        </div>

                        {/* Line numbers + code */}
                        <div ref={codeRef} style={{
                            flex: 1,
                            overflow: 'hidden',
                            padding: '16px 0',
                            fontFamily: "'Courier New', monospace",
                            fontSize: '0.73rem',
                            lineHeight: '22px',
                        }}>
                            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                                <div key={line.id} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '8px',
                                    background: i === visibleLines - 1 ? 'rgba(112,198,225,0.05)' : 'transparent',
                                    transition: 'background 0.2s',
                                }}>
                                    <span style={{
                                        color: 'rgba(255,255,255,0.15)',
                                        minWidth: '28px',
                                        textAlign: 'right',
                                        paddingRight: '12px',
                                        userSelect: 'none',
                                        fontSize: '0.62rem',
                                    }}>{i + 1}</span>
                                    <span style={{ color: line.color || 'rgba(255,255,255,0.4)' }}>
                                        {line.text}
                                        {i === visibleLines - 1 && (
                                            <span style={{
                                                display: 'inline-block',
                                                width: '2px', height: '14px',
                                                background: '#70c6e1',
                                                marginLeft: '2px',
                                                verticalAlign: 'text-bottom',
                                                animation: 'blink 1s step-end infinite',
                                            }} />
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Status bar */}
                        <div style={{
                            padding: '6px 12px',
                            background: 'rgba(63,84,147,0.3)',
                            borderTop: '1px solid rgba(63,84,147,0.4)',
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.5)',
                            display: 'flex', justifyContent: 'space-between',
                        }}>
                            <span>HTML · UTF-8</span>
                            <span style={{ color: '#69c45b' }}>Ln {visibleLines} ✓</span>
                        </div>
                    </div>

                    {/* ── WIREFRAME PREVIEW PANEL ── */}
                    <div className="uc-wireframe-panel" style={{
                        flex: 1,
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        background: 'rgba(0,0,0,0.2)',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            fontSize: '0.6rem',
                            letterSpacing: '2px',
                            color: 'rgba(255,255,255,0.2)',
                            textTransform: 'uppercase',
                            marginBottom: '4px',
                        }}>Live Preview</div>

                        {WIREFRAME_BLOCKS.map((block, i) => (
                            <div key={`block-${block.label}`} style={{
                                height: block.h,
                                border: `1px dashed ${block.border}`,
                                background: block.bg,
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: visibleBlocks[i] ? 1 : 0,
                                transform: visibleBlocks[i] ? 'translateY(0) scaleY(1)' : 'translateY(-8px) scaleY(0.7)',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <span style={{
                                    fontSize: '0.55rem',
                                    letterSpacing: '2px',
                                    color: block.border,
                                    textTransform: 'uppercase',
                                    opacity: 0.7,
                                }}>{block.label}</span>

                                {/* scan-line shimmer on visible blocks */}
                                {visibleBlocks[i] && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, left: '-100%',
                                        width: '60%', height: '100%',
                                        background: `linear-gradient(to right, transparent, ${block.border}18, transparent)`,
                                        animation: `shimmer ${2 + i * 0.4}s ease-in-out infinite`,
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress bar */}
                <div style={{
                    padding: '12px 16px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
                        Building…
                    </span>
                    <div style={{
                        flex: 1,
                        height: '3px',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'linear-gradient(to right, #3f5493, #69c45b, #70c6e1)',
                            borderRadius: '2px',
                            transition: 'width 0.03s linear',
                        }} />
                    </div>
                    <span style={{
                        fontSize: '0.62rem',
                        color: '#69c45b',
                        minWidth: '36px',
                        textAlign: 'right',
                    }}>
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>

            {/* Bottom text + CTA */}
            <div style={{ marginTop: '36px', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                }}>
                    This page is under development
                </h1>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: '28px',
                    lineHeight: 1.6,
                }}>
                    Our team is crafting something exceptional. Check back soon.
                </p>
                <Link href="/" className="tp-btn-black btn-red-bg" style={{ textDecoration: 'none', position: 'relative' }}>
                    <span className="tp-btn-black-filter-blur">
                        <ButtonBlurFilter filterId="returnBtn" />
                    </span>
                    <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#returnBtn)" }}>
                        <span className="tp-btn-black-text">Return Home</span>
                        <span className="tp-btn-black-circle">
                            <ArrowSvg width="14" height="14" strokeWidth="2" />
                        </span>
                    </span>
                </Link>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; box-shadow: 0 0 8px #69c45b; }
                    50% { opacity: 0.5; box-shadow: 0 0 4px #69c45b; }
                }
                @keyframes shimmer {
                    0% { left: -60%; }
                    100% { left: 160%; }
                }

                @media (max-width: 991px) {
                    .uc-content-area {
                        flex-direction: column;
                    }
                    .uc-code-panel {
                        flex: none !important;
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.06);
                        min-height: 250px;
                    }
                    .uc-wireframe-panel {
                        flex: none !important;
                        min-height: 250px;
                        padding: 12px !important;
                    }
                }
            `}</style>
        </main>
    );
}
