import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-1.5 top-0 bottom-0 z-50 flex items-stretch py-6" style={{ width: '3px' }}>
      {/* Track */}
      <div className="relative flex-1 rounded-full bg-white/[0.06]">
        {/* Growing fill */}
        <div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height: `${progress * 100}%`,
            background: 'linear-gradient(to bottom, rgba(0,245,195,0.35), rgba(98,118,255,0.25))',
          }}
        />
        {/* Thumb dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            top: `calc(${progress * 100}% - 3px)`,
            background: 'rgba(0, 245, 195, 0.6)',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
