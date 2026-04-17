'use client';
import { useEffect, useState, useRef } from 'react';

type Phase = 'idle' | 'peeking' | 'beckoning' | 'grabbing' | 'done';

export default function RandevuMascot() {
  const [phase, setPhase]           = useState<Phase>('idle');
  const [pos, setPos]               = useState<{ cx: number; bottom: number } | null>(null);
  const [fakeCursor, setFakeCursor] = useState({ x: 0, y: 0 });
  const [showFake, setShowFake]     = useState(false);
  const [dragging, setDragging]     = useState(false);
  const [btnPulse, setBtnPulse]     = useState(false);
  const [btnPulseRect, setBtnPulseRect] = useState<{ l:number;t:number;w:number;h:number }|null>(null);

  const phaseRef    = useRef<Phase>('idle');
  const seqStarted  = useRef(false);

  /* ── Find button and start sequence ── */
  useEffect(() => {
    const tryStart = () => {
      const el = document.getElementById('hero-randevu-btn');
      if (!el || seqStarted.current) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0) return; // not painted yet
      seqStarted.current = true;
      setPos({ cx: r.left + r.width / 2, bottom: r.bottom });

      setTimeout(() => { setPhase('peeking');   phaseRef.current = 'peeking';   }, 1500);
      setTimeout(() => { setPhase('beckoning'); phaseRef.current = 'beckoning'; }, 2800);
    };

    tryStart();
    const t = setTimeout(tryStart, 300); // retry after paint
    return () => clearTimeout(t);
  }, []);

  /* ── Update position on scroll / resize ── */
  useEffect(() => {
    const updatePos = () => {
      const el = document.getElementById('hero-randevu-btn');
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPos({ cx: r.left + r.width / 2, bottom: r.bottom });
    };
    window.addEventListener('scroll', updatePos, { passive: true });
    window.addEventListener('resize', updatePos);
    return () => {
      window.removeEventListener('scroll', updatePos);
      window.removeEventListener('resize', updatePos);
    };
  }, []);

  /* ── Cursor grab ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (phaseRef.current !== 'beckoning') return;
      const el = document.getElementById('hero-randevu-btn');
      if (!el) return;
      const r  = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top  + r.height / 2;
      if (Math.hypot(e.clientX - cx, e.clientY - cy) < 190) {
        phaseRef.current = 'grabbing';
        setPhase('grabbing');
        setFakeCursor({ x: e.clientX, y: e.clientY });
        setShowFake(true);
        document.body.style.cursor = 'none';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setDragging(true);
          setFakeCursor({ x: cx, y: cy });
        }));
        setTimeout(() => {
          setBtnPulseRect({ l: r.left, t: r.top, w: r.width, h: r.height });
          setBtnPulse(true);
          document.body.style.cursor = '';
          setShowFake(false);
          setDragging(false);
        }, 950);
        setTimeout(() => {
          setBtnPulse(false);
          phaseRef.current = 'done';
          setPhase('done');
        }, 1600);
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const ty =
    phase === 'peeking'   ? -44 :
    phase === 'beckoning' || phase === 'grabbing' ? -94 : 4;

  const active = phase === 'beckoning' || phase === 'grabbing';

  return (
    <>
      <style>{`
        @keyframes rm-beckon {
          0%,100% { transform: rotate(-18deg); }
          50%      { transform: rotate(26deg) translateX(3px); }
        }
        @keyframes rm-bob {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes rm-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(201,168,76,0.9); transform: scale(1); }
          55%  { box-shadow: 0 0 0 24px rgba(201,168,76,0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(201,168,76,0);   transform: scale(1); }
        }
        @keyframes rm-blink {
          0%,88%,100% { transform: scaleY(1); }
          94%          { transform: scaleY(0.07); }
        }
      `}</style>

      {/* Button pulse ring */}
      {btnPulse && btnPulseRect && (
        <div style={{
          position: 'fixed',
          left: btnPulseRect.l, top: btnPulseRect.t,
          width: btnPulseRect.w, height: btnPulseRect.h,
          borderRadius: '9999px',
          background: 'rgba(201,168,76,0.28)',
          zIndex: 99990, pointerEvents: 'none',
          animation: 'rm-pulse 0.55s ease-out forwards',
        }} />
      )}

      {/* Fake cursor */}
      {showFake && (
        <div style={{
          position: 'fixed',
          left: fakeCursor.x - 5,
          top:  fakeCursor.y - 3,
          zIndex: 99999, pointerEvents: 'none',
          transition: dragging
            ? 'left 0.92s cubic-bezier(0.25,0.46,0.45,0.94), top 0.92s cubic-bezier(0.25,0.46,0.45,0.94)'
            : 'none',
        }}>
          {dragging ? <GrabCursor /> : <ArrowCursor />}
        </div>
      )}

      {/* Mascot */}
      {pos && phase !== 'idle' && phase !== 'done' && (
        <div
          className="hidden lg:block"
          style={{
            position: 'fixed',
            left: pos.cx,
            top:  pos.bottom,
            transform: `translateX(-50%) translateY(${ty}px)`,
            transition: 'transform 0.72s cubic-bezier(0.34,1.56,0.64,1)',
            zIndex: 9995,
            pointerEvents: 'none',
          }}
        >
          <div style={{
            animation: active ? 'rm-bob 1.3s ease-in-out infinite' : undefined,
          }}>
            <FairyFace active={active} grabbing={phase === 'grabbing'} />
          </div>
        </div>
      )}
    </>
  );
}

function ArrowCursor() {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
      <path d="M2 2 L2 20 L7 15 L12 22 L15 20 L10 13 L17 13 Z"
        fill="white" stroke="#333" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

function GrabCursor() {
  return (
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none">
      <path d="M6 14 C6 11 8.5 10 10 11.5 L10 6 C10 4.3 11.2 4 12 4 C12.8 4 14 4.3 14 6 L14 10 C14.6 9 15.8 8.8 16.3 9.7 C16.9 8.8 18.2 9.1 18.5 10 C19.1 9.5 20.8 10.2 20.8 12 L20.8 18 C20.8 22 18 25.5 15 25.5 L11 25.5 C8.5 25.5 6 23 6 20 Z"
        fill="#FDBCB4" stroke="#C9A84C" strokeWidth="1.3"/>
      <path d="M10 11.5 L10 16 M14 10 L14 16 M18.5 10 L18.5 16"
        stroke="#d4956a" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function FairyFace({ active, grabbing }: { active: boolean; grabbing: boolean }) {
  return (
    <svg width="62" height="82" viewBox="0 0 62 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rm-drop" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.32)"/>
        </filter>
      </defs>
      <g filter="url(#rm-drop)">
        {/* Crown */}
        <path d="M13 21 L17 12 L23 18 L31 9 L39 18 L45 12 L49 21"
          stroke="#C9A84C" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
        <circle cx="31" cy="9"  r="3.3" fill="#FFD700"/>
        <circle cx="17" cy="11" r="2.1" fill="#FFD700"/>
        <circle cx="45" cy="11" r="2.1" fill="#FFD700"/>
        <path d="M31 4.5 L31 7 M28 6 L29.5 7.5 M34 6 L32.5 7.5"
          stroke="#FFD700" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Hair */}
        <ellipse cx="31" cy="27" rx="19" ry="17" fill="#5C3317"/>
        <ellipse cx="31" cy="18" rx="18" ry="11" fill="#3D1F0A"/>
        <path d="M12 27 Q7 38 12 47"  stroke="#3D1F0A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M50 27 Q55 38 50 47" stroke="#3D1F0A" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Face */}
        <circle cx="31" cy="29" r="17" fill="#FDBCB4"/>
        {/* Left eye */}
        <g style={{ transformOrigin:'23px 27px', animation:'rm-blink 3.5s ease-in-out infinite' }}>
          <ellipse cx="23" cy="27" rx="4.2" ry="4.6" fill="#1a0d08"/>
          <circle cx="24.8" cy="25.2" r="1.7" fill="white"/>
          <circle cx="25.3" cy="25.8" r="0.6" fill="white"/>
        </g>
        {/* Right eye */}
        <g style={{ transformOrigin:'39px 27px', animation:'rm-blink 3.5s ease-in-out 0.2s infinite' }}>
          <ellipse cx="39" cy="27" rx="4.2" ry="4.6" fill="#1a0d08"/>
          <circle cx="40.8" cy="25.2" r="1.7" fill="white"/>
          <circle cx="41.3" cy="25.8" r="0.6" fill="white"/>
        </g>
        {/* Lashes */}
        <path d="M19 23 L17.5 20.5" stroke="#1a0d08" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M22 22 L21 19.5"   stroke="#1a0d08" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M35 22 L35.5 19.5" stroke="#1a0d08" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M38 23 L39.5 20.5" stroke="#1a0d08" strokeWidth="1.1" strokeLinecap="round"/>
        {/* Blush */}
        <circle cx="17" cy="33" r="5.5" fill="#F4A0A0" opacity="0.42"/>
        <circle cx="45" cy="33" r="5.5" fill="#F4A0A0" opacity="0.42"/>
        {/* Mouth */}
        {grabbing
          ? <ellipse cx="31" cy="37" rx="4.5" ry="4" fill="#E0506A"/>
          : <path d="M24 37 Q31 43 38 37" stroke="#E0506A" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
        }
        {/* Body */}
        <path d="M15 47 L11 74 L51 74 L47 47 Q39 41 31 41 Q23 41 15 47 Z" fill="#C9A84C"/>
        <path d="M15 47 Q31 55 47 47" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" fill="none"/>
        <path d="M25 49 L21 74" stroke="rgba(255,255,255,0.11)" strokeWidth="2"/>
        <path d="M31 44 L31 74" stroke="rgba(255,255,255,0.11)" strokeWidth="2"/>
        <path d="M37 49 L41 74" stroke="rgba(255,255,255,0.11)" strokeWidth="2"/>
        <rect x="17" y="59" width="28" height="4.5" rx="2.2" fill="rgba(255,215,60,0.38)"/>
        <circle cx="31" cy="67" r="2"   fill="rgba(255,230,80,0.65)"/>
        <circle cx="23" cy="65" r="1.4" fill="rgba(255,230,80,0.4)"/>
        <circle cx="39" cy="65" r="1.4" fill="rgba(255,230,80,0.4)"/>
        {/* Beckoning arm */}
        <g style={{ transformOrigin:'47px 50px', animation: active ? 'rm-beckon 0.65s ease-in-out infinite' : undefined }}>
          <path d="M47 50 L58 43" stroke="#FDBCB4" strokeWidth="6.5" fill="none" strokeLinecap="round"/>
          <circle cx="59" cy="42" r="5.5" fill="#FDBCB4"/>
          <path d="M55 39 Q59 34 63 38 Q65 35 62 32 Q58 30 55 33"
            stroke="#d4956a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </g>
        {/* Left arm */}
        <path d="M15 50 L5 54" stroke="#FDBCB4" strokeWidth="6.5" fill="none" strokeLinecap="round"/>
        <circle cx="4" cy="54" r="4.5" fill="#FDBCB4"/>
      </g>
    </svg>
  );
}
