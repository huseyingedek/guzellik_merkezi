'use client';
import { useEffect, useState } from 'react';

type Phase = 'idle' | 'running' | 'pressing' | 'talking';

const SPEECH = 'Hadi! Bakım\nzamanı geldi \u2728\nRandevu al!';

export default function HeroMascot() {
  const [phase, setPhase]     = useState<Phase>('idle');
  const [typed, setTyped]     = useState('');
  const [legFrame, setLegFrame] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('running'),  2200);
    const t2 = setTimeout(() => setPhase('pressing'), 5000);
    const t3 = setTimeout(() => setPhase('talking'),  5600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (phase !== 'running') return;
    const iv = setInterval(() => setLegFrame(f => (f + 1) % 4), 130);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'talking') return;
    let i = 0;
    const iv = setInterval(() => {
      setTyped(SPEECH.slice(0, i + 1));
      i++;
      if (i >= SPEECH.length) clearInterval(iv);
    }, 42);
    return () => clearInterval(iv);
  }, [phase]);

  const isRunning  = phase === 'running';
  const isPressing = phase === 'pressing';
  const isTalking  = phase === 'talking';
  const hasArrived = isPressing || isTalking;

  return (
    <>
      <style>{`
        @keyframes mascot-enter {
          0%   { transform: translateX(92vw) scale(0.45) perspective(600px) rotateY(-12deg); opacity:0; }
          4%   { opacity: 1; }
          82%  { transform: translateX(-10px) scale(1.04) perspective(600px) rotateY(3deg); }
          100% { transform: translateX(0) scale(1) perspective(600px) rotateY(0deg); }
        }
        @keyframes mascot-bob {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-7px); }
        }
        @keyframes mascot-press {
          0%   { transform: translateY(0px)  translateX(0px)  rotate(0deg); }
          30%  { transform: translateY(-14px) translateX(10px) rotate(-6deg); }
          60%  { transform: translateY(6px)  translateX(12px) rotate(4deg); }
          80%  { transform: translateY(-3px) translateX(10px) rotate(-2deg); }
          100% { transform: translateY(0px)  translateX(0px)  rotate(0deg); }
        }
        @keyframes bubble-pop {
          0%   { transform: scale(0.3) translateY(8px); opacity: 0; }
          65%  { transform: scale(1.06) translateY(0px); opacity: 1; }
          100% { transform: scale(1)    translateY(0px); opacity: 1; }
        }
        @keyframes shadow-enter {
          from { transform: translateX(-50%) scaleX(0.3); opacity: 0; }
          to   { transform: translateX(-50%) scaleX(1);   opacity: 1; }
        }
        @keyframes wand-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div
        className="hidden lg:block absolute z-30 pointer-events-none select-none"
        style={{ bottom: '88px', left: '6%' }}
      >
        {/* Speech bubble */}
        {isTalking && (
          <div
            className="absolute bg-white rounded-2xl px-4 py-3 text-sm font-bold whitespace-pre-line leading-relaxed shadow-2xl"
            style={{
              bottom: '100px',
              left: '-10px',
              maxWidth: '190px',
              color: '#1a1208',
              border: '2px solid rgba(201,168,76,0.5)',
              transformOrigin: 'bottom left',
              animation: 'bubble-pop 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards',
            }}
          >
            {typed}
            <span className="absolute -bottom-3 left-7"
              style={{ display:'block', width:0, height:0,
                borderLeft:'8px solid transparent', borderRight:'8px solid transparent',
                borderTop:'14px solid white' }} />
            <span className="absolute left-[26px]"
              style={{ display:'block', bottom:'-17px', width:0, height:0,
                borderLeft:'9px solid transparent', borderRight:'9px solid transparent',
                borderTop:'15px solid rgba(201,168,76,0.5)', zIndex:-1 }} />
          </div>
        )}

        {/* Ground shadow */}
        <div style={{
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          width: '68px',
          height: '14px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.22)',
          filter: 'blur(6px)',
          animation: phase === 'idle' ? undefined : 'shadow-enter 0.4s ease-out forwards',
          transform: 'translateX(-50%)',
        }} />

        {/* Horizontal + scale (3-D depth) runner */}
        <div style={{
          animation: isRunning ? 'mascot-enter 2.8s cubic-bezier(0.22,0.61,0.36,1) forwards' : undefined,
          transform: phase === 'idle' ? 'translateX(92vw) scale(0.45)' : undefined,
          opacity:   phase === 'idle' ? 0 : 1,
        }}>
          {/* Vertical bounce / press */}
          <div style={{
            animation: isPressing
              ? 'mascot-press 0.7s ease-in-out forwards'
              : isTalking
              ? 'mascot-bob 1.1s ease-in-out infinite'
              : undefined,
          }}>
            {/* Face LEFT (toward button) */}
            <div style={{ transform: 'scaleX(-1)' }}>
              <CharacterSVG isRunning={isRunning} isPressing={isPressing} legFrame={legFrame} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── SVG character — designed facing RIGHT, flipped to face left ── */
function CharacterSVG({
  isRunning, isPressing, legFrame,
}: { isRunning:boolean; isPressing:boolean; legFrame:number }) {

  /* 4-frame run cycle */
  const f = legFrame % 4;

  /* Leg pairs per frame */
  const legs = [
    /* f=0 */ { l1y2:98, l1x2:22, l2y2:94, l2x2:58, s1x:20, s2x:59 },
    /* f=1 */ { l1y2:96, l1x2:28, l2y2:98, l2x2:50, s1x:26, s2x:49 },
    /* f=2 */ { l1y2:94, l1x2:34, l2y2:96, l2x2:46, s1x:32, s2x:45 },
    /* f=3 */ { l1y2:96, l1x2:28, l2y2:94, l2x2:50, s1x:26, s2x:49 },
  ][f];

  /* Arm pairs per frame */
  const arms = [
    /* f=0 */ { ra:[58,54,70,42], la:[20,54,8,62] },
    /* f=1 */ { ra:[58,54,72,56], la:[20,54,8,50] },
    /* f=2 */ { ra:[58,54,70,62], la:[20,54,8,42] },
    /* f=3 */ { ra:[58,54,72,50], la:[20,54,8,56] },
  ][f];

  return (
    <svg width="80" height="108" viewBox="0 0 80 108" fill="none"
         xmlns="http://www.w3.org/2000/svg">

      {/* Drop shadow filter */}
      <defs>
        <filter id="char-shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.28)" />
        </filter>
      </defs>

      <g filter="url(#char-shadow)">

        {/* Hair back */}
        <ellipse cx="40" cy="22" rx="19" ry="21" fill="#5C3317" />
        <ellipse cx="40" cy="13" rx="19" ry="13" fill="#3D1F0A" />
        <path d="M 21 23 Q 16 36 20 46" stroke="#3D1F0A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 59 23 Q 64 36 60 46" stroke="#3D1F0A" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* Face */}
        <circle cx="40" cy="26" r="16" fill="#FDBCB4" />

        {/* Eyes */}
        <circle cx="33" cy="24" r="4.2" fill="#1a0d08" />
        <circle cx="47" cy="24" r="4.2" fill="#1a0d08" />
        <circle cx="34.5" cy="22.5" r="1.8" fill="white" />
        <circle cx="48.5" cy="22.5" r="1.8" fill="white" />
        <circle cx="35.2" cy="23.2" r="0.7" fill="white" />
        <circle cx="49.2" cy="23.2" r="0.7" fill="white" />

        {/* Lashes */}
        <path d="M 29.5 20.5 L 28 17.5" stroke="#1a0d08" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 32.5 19.2 L 31.5 16" stroke="#1a0d08" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 35.5 18.5 L 35 15.5" stroke="#1a0d08" strokeWidth="1.2" strokeLinecap="round" />

        {/* Cheeks */}
        <circle cx="27" cy="30" r="5.5" fill="#F4A0A0" opacity="0.42" />
        <circle cx="53" cy="30" r="5.5" fill="#F4A0A0" opacity="0.42" />

        {/* Mouth — smile or open (pressing) */}
        {isPressing ? (
          <ellipse cx="40" cy="34" rx="5" ry="4" fill="#E0506A" />
        ) : (
          <path d="M 33 33 Q 40 39 47 33" stroke="#E0506A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        )}

        {/* Neck */}
        <rect x="35" y="41" width="10" height="8" fill="#FDBCB4" />

        {/* Dress */}
        <path d="M 21 50 L 15 86 L 65 86 L 59 50 Q 49 44 40 44 Q 31 44 21 50 Z" fill="#C9A84C" />
        <path d="M 21 50 Q 40 58 59 50" stroke="rgba(255,255,255,0.38)" strokeWidth="1.8" fill="none" />
        <path d="M 31 52 L 27 86" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
        <path d="M 40 46 L 40 86" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
        <path d="M 49 52 L 53 86" stroke="rgba(255,255,255,0.13)" strokeWidth="2" />
        {/* Belt */}
        <rect x="22" y="64" width="36" height="5" rx="2.5" fill="rgba(255,215,60,0.45)" />
        {/* Belt buckle */}
        <rect x="37" y="64" width="6" height="5" rx="1.5" fill="rgba(255,235,100,0.7)" />

        {/* ── ARMS ── */}
        {isPressing ? (
          /* Reach toward button (upper-right in screen = upper-left in SVG after flip) */
          <>
            <path d="M 59 56 L 76 40" stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Pointing finger */}
            <circle cx="76" cy="39" r="4" fill="#FDBCB4" />
            <path d="M 21 56 L 9 60"  stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
          </>
        ) : isRunning ? (
          <>
            <path d={`M ${arms.ra[0]} ${arms.ra[1]} L ${arms.ra[2]} ${arms.ra[3]}`}
                  stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d={`M ${arms.la[0]} ${arms.la[1]} L ${arms.la[2]} ${arms.la[3]}`}
                  stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M 59 56 L 73 52"  stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M 21 56 L 9  52"  stroke="#FDBCB4" strokeWidth="7" fill="none" strokeLinecap="round" />
          </>
        )}

        {/* ── LEGS ── */}
        {isRunning ? (
          <>
            <path d={`M 33 86 L ${legs.l1x2} ${legs.l1y2}`}
                  stroke="#B8963C" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d={`M 47 86 L ${legs.l2x2} ${legs.l2y2}`}
                  stroke="#B8963C" strokeWidth="9" fill="none" strokeLinecap="round" />
            <ellipse cx={legs.s1x} cy={legs.l1y2 + 1} rx="8.5" ry="3.5" fill="#5C3317" />
            <ellipse cx={legs.s2x} cy={legs.l2y2 + 1} rx="8.5" ry="3.5" fill="#5C3317" />
          </>
        ) : (
          <>
            <path d="M 33 86 L 31 102" stroke="#B8963C" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M 47 86 L 49 102" stroke="#B8963C" strokeWidth="9" fill="none" strokeLinecap="round" />
            <ellipse cx="29" cy="103" rx="9.5" ry="3.5" fill="#5C3317" />
            <ellipse cx="51" cy="103" rx="9.5" ry="3.5" fill="#5C3317" />
          </>
        )}

        {/* Magic wand (idle/talking) */}
        {!isRunning && (
          <g style={{ transformOrigin:'72px 46px', animation:'wand-spin 2.4s linear infinite' }}>
            <path d="M 64 52 L 74 40" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="75" cy="39" r="3.5" fill="#FFD700" />
            <path d="M 75 33 L 75 36.5 M 81 39 L 77.5 39 M 78 34 L 75.5 36.5 M 72 34 L 74.5 36.5"
                  stroke="#FFD700" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        )}

      </g>
    </svg>
  );
}
