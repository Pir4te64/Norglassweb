// src/components/ui/smooth-cursor/SmoothCursor.jsx
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SmoothCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return createPortal(
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#1E40AF',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />,
    document.body
  );
}
