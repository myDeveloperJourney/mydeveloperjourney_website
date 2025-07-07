'use client';

import { useState, useEffect } from 'react';

const lines = [
  'Veteran. Developer. Mentor.',
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      // Reset to start typing again after a delay
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n');
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 text-purpleAccent"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background watermark placeholder for Phoenix logo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none flex justify-center items-center bg-black/40"></div>
      {/* Headshot photo */}
      <div className="mb-12 relative z-10">
        <img
          src="/headshot.jpg"
          alt="Daniel Scott Headshot"
          className="w-60 h-60 rounded-full border-4 border-purpleAccent object-cover"
        />
      </div>
      <div className="relative z-10 max-w-3xl w-full text-center whitespace-pre-line text-lg leading-relaxed">
        <h1 className="text-shadow-glow text-black font-bold">Hi, I'm Daniel Scott</h1>
        <pre className="text-shadow-glow text-black font-bold typing whitespace-pre-line break-words text-center px-2 sm:px-0">{displayedText}<span className="caret"></span></pre>
      </div>
    </section>
  );
}
