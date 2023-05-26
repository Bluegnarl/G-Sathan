import { useState, useEffect, useRef } from "react";

import SocialMedia from '../SocialMedia/SocialMedia'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import mail from '../../images/mail.svg'

export default function Footer({ appInfo, appWidth }) {
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
      style={{ borderTop: "1px solid #121212", height: "500px", transition: 'transform .3s ease-in-out, opacity .25s ease-in-out', opacity: visible ? '1' : '0', transform: visible ? 'scaleY(100%)' : 'scaleY(80%)' }}
    >
      <div className="d-flex-row ai-center m-32">
        <SocialMedia socialMedia='@gerard_sathan' socialMediaLink='https://www.instagram.com/gerard_sathan' socialMediaIcon={instagram} socialMediaName='Instagram' appWidth={appWidth} />
        <SocialMedia socialMedia='gerardsathantattoosandartworks' socialMediaLink='https://www.facebook.com/gerardsathantattoosandartworks' socialMediaIcon={facebook} socialMediaName='Facebook' appWidth={appWidth} />
        <SocialMedia socialMedia='g.sathantattoo@gmail.com' socialMediaLink='https://instagram.com/gerard_sathan' socialMediaIcon={mail} socialMediaName='Gmail' appWidth={appWidth} />
      </div>
      <p className={`${
          appWidth < 175
            ? "fs-5"
            : appWidth < 210
            ? "fs-7"
            : appWidth < 300
            ? "fs-9"
            : appWidth < 391
            ? "fs-12"
            : appWidth < 1100
            ? "fs-14"
            : appWidth < 1650
            ? "fs-16"
            : appWidth < 2000
            ? "fs-18"
            : "fs-24"
        } m-32 c-surface-3 fw-500`}>
        Gérard Sathan &copy; All rights reserved
      </p>
    </div>
  );
}
