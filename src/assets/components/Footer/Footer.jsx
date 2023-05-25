import { useState, useEffect, useRef } from "react";

export default function Footer({ appInfo }) {
  const footerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= .5 ||
          appInfo.scroll >= footerRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [.5],
    });
    footerRef.current && observer.observe(footerRef.current);
  }, [footerRef, appInfo]);

  return (
    <div
      ref={footerRef}
      className="d-flex-column ai-center w-full mt-48"
      style={{ borderTop: "1px solid #212121", height: "500px", transition: 'transform .3s ease-in-out, opacity .25s ease-in-out', opacity: visible ? '1' : '0', transform: visible ? 'scaleY(100%)' : 'scaleY(80%)' }}
    >
      <p className="p-32">À venir...</p>
      <p className="p-32 c-on-surface-variant">
        Gérard Sathan &copy; All rights reserved
      </p>
    </div>
  );
}
