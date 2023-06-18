import { useState } from "react";

import styles from "./Menu.module.scss";

import Title from "../Title/Title";
import SocialMedia from "../SocialMedia/SocialMedia";

import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import mail from "../../images/mail.svg";

export default function Menu({ appWidth, visible }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => setMenu(true)}
        className={`${
          menu ? "" : "cursor-pointer white-shadow user-select-none"
        } ${styles.menu} d-flex-column pos-fixed jc-center ai-center`}
        style={{
          width: "50px",
          height: "50px",
          top: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
          left: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
          transform: menu && "translate(-50%, -50%)",
          borderRadius: "100%",
          zIndex: "100",
          transition:
            "background .2s, transform .3s ease-out, bottom .3s ease-out, right .3s ease-out, top .3s ease-out, left .3s ease-out",
          opacity: visible ? "1" : "0",
          transform: visible ? "scale(100%)" : "scale(80%)",
        }}
      >
        <span
          className="material-symbols-outlined fs-28"
          style={{
            display: menu ? "none" : "block",
            transition: "opacity .3s ease-in",
          }}
        >
          menu
        </span>
      </div>
      <div
        className={`${
          menu ? "d-flex-column w-full h-full" : "d-flex-column w-zero h-zero"
        } pos-fixed b-surface-2`}
        style={{
          zIndex: "100",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: menu ? "0" : "100%",
          transition:
            "border-radius .3s ease-out .4s, width .3s ease-out .4s, height .3s ease-out .4s",
        }}
      >
        <div
          className={`w-full p-48`}
          style={{
            height: "200px",
            top: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
            left: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
            opacity: menu ? "1" : "0",
            transition: "opacity .2s ease-out .4s",
          }}
        >
          <span
            onClick={() => setMenu(false)}
            className={`${styles.close} material-symbols-outlined fs-32 p-8 cursor-pointer user-select-none`}
          >
            close
          </span>
        </div>
        <div className={`w-full h-full d-flex-column ai-center jc-center`}>
          <Title menu={menu} appWidth={appWidth} title="À propos" />
          <Title menu={menu} appWidth={appWidth} title="Portfolio" />
          <Title menu={menu} appWidth={appWidth} title="Contact" />
        </div>
        <div
          className={`w-full p-48`}
          style={{
            height: "200px",
            top: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
            left: menu ? "50%" : appWidth < 1650 ? "48px" : "64px",
            opacity: menu ? "1" : "0",
            transition: "opacity .2s ease-out .4s",
          }}
        >
          {" "}
          <div
            className={`${
              appWidth < 300 ? "mb-24" : "mb-40"
            } d-flex-row jc-center flex-wrap ai-center`}
          >
            {/* <SocialMedia
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
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
