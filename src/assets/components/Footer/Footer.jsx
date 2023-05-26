import { useState, useEffect, useRef } from "react";

import SocialMedia from "../SocialMedia/SocialMedia";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import mail from "../../images/mail.svg";

export default function Footer({ appInfo, appWidth }) {
  const footerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.5 ||
          appInfo.scroll >= footerRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0.5],
    });
    footerRef.current && observer.observe(footerRef.current);
  }, [footerRef, appInfo]);

  return (
    <div
      ref={footerRef}
      className={`${
        appWidth < 300
          ? "p-16 pb-12"
          : appWidth < 1100
          ? "p-32 pb-16"
          : appWidth < 1650
          ? "p-48 pb-32"
          : "p-64 pb-32"
      } d-flex-column ai-center w-full mt-48`}
      style={{
        borderTop: "1px solid #121212",
        height: "500px",
        transition: "transform .3s ease-in-out, opacity .25s ease-in-out",
        opacity: visible ? "1" : "0",
        transform: visible ? "translateY(0%)" : "translateY(5%)",
      }}
    >
      {/* <div
        className={`${appWidth < 300 ? "mb-16" : "mb-32"} ${
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
        } ${ appWidth < 950 ? 'd-flex-column' : 'd-flex-row'} jc-space-between w-full`}
      >
        <p className="ta-left" style={{ width: appWidth < 950 ? "100%" : "50%" }}>
          Ne l'oubliez pas, se faire tatouer est un acte qui altère
          définitivement l'intégrité physique !<br />
          Faites le bon choix avant de vous lancer !
        </p>
        <p className="ta-right" style={{ width: appWidth < 950 ? "100%" : "50%" }}></p>
      </div> */}
      <div
        className={`${
          appWidth < 175
            ? "fs-7 mb-5"
            : appWidth < 300
            ? "fs-9 mb-5"
            : appWidth < 391
            ? "fs-12 mb-8"
            : appWidth < 1100
            ? "fs-14 mb-8"
            : appWidth < 2000
            ? "fs-16 mb-12"
            : "fs-24 mb-16"
        } d-flex-row jc-center w-full fw-600 `}
      >
        RETROUVEZ-MOI SUR :
      </div>
      <div
        className={`${
          appWidth < 300 ? "mb-24" : "mb-40"
        } d-flex-row jc-center flex-wrap ai-center`}
      >
        <SocialMedia
          socialMedia="@gerard_sathan"
          socialMediaLink="https://www.instagram.com/gerard_sathan"
          socialMediaIcon={instagram}
          socialMediaName="Instagram"
          appWidth={appWidth}
        />
        <SocialMedia
          socialMedia="gerardsathantattoosandartworks"
          socialMediaLink="https://www.facebook.com/gerardsathantattoosandartworks"
          socialMediaIcon={facebook}
          socialMediaName="Facebook"
          appWidth={appWidth}
        />
        <SocialMedia
          socialMedia="g.sathantattoo@gmail.com"
          socialMediaLink="mailto:g.sathantattoo@gmail.com"
          socialMediaIcon={mail}
          socialMediaName="Gmail"
          appWidth={appWidth}
        />
      </div>
      <p
        className={`${
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
        } c-on-surface-variant fw-500`}
      >
        Gérard Sathan &copy; All rights reserved
      </p>
    </div>
  );
}
