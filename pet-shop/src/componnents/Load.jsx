import React, { useState, useEffect } from 'react';

const Load = ({ children }) => {
  const [loading, setLoading] = useState(true); // کنترل نمایش لودینگ
  const [fadeOutLoading, setFadeOutLoading] = useState(false); // fade-out لودینگ
  const [fadeInContent, setFadeInContent] = useState(false);   // fade-in محتوا

  useEffect(() => {
    const timer = setTimeout(() => {
      // ابتدا لودینگ شروع به fade-out کند
      setFadeOutLoading(true);

      // بعد از مدت زمان fade-out، لودینگ حذف و محتوای سایت fade-in شود
      setTimeout(() => {
        setLoading(false);
        setFadeInContent(true);
      }, 500); // 500ms طول fade-out
    }, 3000); // مدت زمان نمایش لودینگ

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 transition-opacity duration-500 ${
            fadeOutLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-34 w-34"></div>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${fadeInContent ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Load;
