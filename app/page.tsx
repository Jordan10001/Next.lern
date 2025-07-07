'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const glitchRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  // List bahasa yang akan ditampilkan
  const textOptions = [
    "INNOFASHION 2025",  // English
    "이노패션 2025",     // Korean
    "创新时尚 2025",      // Chinese (Simplified)
    "ИННОФАШИОН 2025",  // Russian
    "इनोफैशन 2025", // India
    "INNOMODA 2025", // Spanish
    "THỜI TRANG SÁNG TẠO 2025", //Vietnam
    "INNOMODE 2025", // French
    "2025إنوفاشن", //Arab
    "ইনোফ্যাশন ২০২৫", //Bengali
    "INNOMODA 2025", // Portugis
    "イノファッション 2025", // Japan
    "INNOFASHION 2025", // Indonesia
    "แฟชั่นนวัตกรรม 2025", //Thailand
    "INNOMODE 2025", // Jerman
    "ម៉ូដច្នៃប្រឌិត ២០២៥" // Kamboja
    
  ];

  useEffect(() => {
    // Efek glitch untuk teks
    if (typeof window !== 'undefined') {
      gsap.fromTo(
        glitchRef.current,
        { opacity: 0.8, x: -2 },
        { opacity: 1, x: 2, repeat: -1, yoyo: true, duration: 0.1, stagger: 0.05 }
      );
    }

    // Animasi pergantian teks setiap 2 detik
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setLoading(true);
    
    // Animasi mengecilkan teks sebelum pindah halaman
    gsap.to(glitchRef.current, {
      scale: 0.1, 
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        router.push('/innomain');
      }
    });
  };

  return (
    <div className="container">
      {/* Button dengan efek Glitch dan animasi bahasa */}
      <button 
        ref={glitchRef} 
        className={`glitch-text ${loading ? 'hidden' : ''}`} // Sembunyikan saat loading aktif
        onClick={handleClick}
      >
        {textOptions[textIndex]}
      </button>

      {/* Loading Screen */}
      <div className={`loading-screen ${loading ? 'active' : ''}`}>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
