'use client';

import { useCursorFollower } from '@/hooks/useCursorFollower';

export default function CursorFollower() {
  useCursorFollower();

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-outline"></div>
    </>
  );
}