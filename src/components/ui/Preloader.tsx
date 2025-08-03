'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center transition-all duration-800 ease-out ${
      isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className="relative">
        {/* Anillo exterior pulsante */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-blue-500/30 animate-ping"></div>
        
        {/* Anillo medio rotatorio */}
        <div className="absolute inset-2 w-28 h-28 rounded-full border-t-2 border-r-2 border-transparent border-t-blue-500 border-r-purple-500 animate-spin duration-1000"></div>
        
        {/* Anillo interior con gradiente */}
        <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-200% animate-gradient">
          <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
            {/* Puntos centrales */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-float-1"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-float-2"></div>
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-blue-300 rounded-full animate-float-3"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-300 rounded-full animate-float-1"></div>
      </div>
      
      {/* Texto de carga */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <div className="text-sm text-gray-400 font-medium tracking-wider animate-pulse">
          CARGANDO
        </div>
      </div>
    </div>
  );
}