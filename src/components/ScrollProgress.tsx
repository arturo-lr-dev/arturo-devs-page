'use client';

import { useScrollProgress } from '@/hooks/useScrollAnimations';

export default function ScrollProgress() {
  useScrollProgress();

  return <div className="scroll-progress"></div>;
}