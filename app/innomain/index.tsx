"use client";
import styles from "./innomain.module.css";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const Innomain = () => {
  const glitchRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = [
    "INNOFASHION 2025", "이노패션 2025", "创新时尚 2025", "ИННОФАШИОН 2025",
    "इनोफैशन 2025", "INNOMODA 2025", "THỜI TRANG SÁNG TẠO 2025", "INNOMODE 2025",
    "2025إنوفاشن", "ইনোফ্যাশন ২০২৫", "INNOMODA 2025", "イノファッション 2025",
    "INNOFASHION 2025", "แฟชั่นนวัตกรรม 2025", "INNOMODE 2025", "ម៉ូដច្នៃប្រឌិត ២០២៥"
  ];

  useEffect(() => {
    if (glitchRef.current) {
      gsap.fromTo(
        glitchRef.current,
        { opacity: 1, x: -2 },
        { opacity: 1, x: 2, repeat: -1, yoyo: true, duration: 0.1 }
      );
    }

    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 350);

    AOS.init({
      once: false,
      duration: 1000,
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Glitch Background - Tetap di tengah */}
      <div className={styles.glitchBackground} ref={glitchRef}>
        {textOptions[textIndex]}
      </div>

      {/* Wrapper AOS yang bisa di-scroll */}
      <div className={styles.aosContainer}>
        <div data-aos="zoom-in" className={styles.box}>
          Acara : INNOFASHION 2025
          <br />
          Tanggal : 20 - 23 November 2025
          <br />
          Lokasi : Ciputra World Surabaya
        </div>
        <div data-aos="zoom-in-up" className={styles.box}>Zoom In Up</div>
        <div data-aos="zoom-in-down" className={styles.box}>Zoom In Down</div>
        <div data-aos="fade-up" className={styles.box}>Fade Up</div>
        <div data-aos="fade-down" className={styles.box}>
        <ul>
          <li>
            <a href="https://lin.ee/BkeH7rd" >OA LINE</a>
          </li>
          <li>
            <a href="https://www.instagram.com/innofashion.pcu?igsh=N2c0Z3ZpbXNjazUx">INSTAGRAM</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@innofashionshow?is_from_webapp=1&amp;sender_device=pc">TIKTOK</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Innomain;
