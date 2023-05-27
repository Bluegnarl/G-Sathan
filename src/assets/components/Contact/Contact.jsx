import styles from "./Contact.module.scss";

import { useState, useEffect, useRef } from "react";

import ContactInformations from "../ContactInformations/ContactInformations";
import ping from "../../images/ping.svg";
import arobase from "../../images/arobase.svg";
import agenda from "../../images/agenda.svg";
import form from "../../images/form.svg";

export default function Contact({ appInfo, appWidth }) {
  const [hover, setHover] = useState(false);

  const contactRef = useRef(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.9 ||
          appInfo.scroll >= contactRef.current.offsetTop
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0.9],
    });
    contactRef.current && observer.observe(contactRef.current);
  }, [contactRef, appInfo]);

  return (
    <div
      ref={contactRef}
      className={`${
        appWidth < 391
          ? "pb-48"
          : appWidth < 1100
          ? "p-20 pb-48"
          : appWidth < 1650
          ? "p-48 pb-96"
          : "p-64 pb-96"
      } d-flex-column ai-center`}
    >
      <div
        className={styles.contactInformations}
      >
        <ContactInformations
          latence='0s'
          visible={visible}
          appInfo={appInfo}
          appWidth={appWidth}
          icon={ping}
          iconWidth={`${
            appWidth < 391 ? "13px" : appWidth < 1100 ? "18px" : "24.5px"
          }`}
          title="Régions disponible"
          content="Belgique, Ardennes"
        />
        <ContactInformations
          latence='.1s'
          visible={visible}
          appInfo={appInfo}
          appWidth={appWidth}
          icon={arobase}
          iconWidth={`${
            appWidth < 391 ? "18px" : appWidth < 1100 ? "24px" : "32px"
          }`}
          title="Moyens de contact"
          content="Réseaux sociaux, mail, formulaire"
        />
        <ContactInformations
          latence='.2s'
          visible={visible}
          appInfo={appInfo}
          appWidth={appWidth}
          icon={agenda}
          iconWidth={`${
            appWidth < 391 ? "16px" : appWidth < 1100 ? "22px" : "30px"
          }`}
          title="Souvent en déplacement"
          content="Contactez-moi pour en savoir plus"
          className={styles.agenda}
        />
      </div>
      <div
        className={`${
          appWidth < 391 ? "mt-40" : "mt-64"
        } pos-relative d-flex-row jc-center`}
        style={{
          transition: "opacity .3s ease-out .35s, transform .3s ease-out .35s",
          opacity: visible ? "1" : "0",
          transform: visible ? "scale(100%)" : "scale(80%)",
        }}
      >
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={`${styles.formButton} d-flex-column ai-center br-8`}
          style={{
            zIndex: "1",
            padding:
              appWidth < 391 ? "7px 10px 7px 10px" : "10px 16px 10px 16px",
          }}
        >
          <p
            className={`${
              appWidth < 160
                ? "fs-9"
                : appWidth < 210
                ? "fs-11"
                : appWidth < 300
                ? "fs-12"
                : appWidth < 391
                ? "fs-14"
                : appWidth < 1100
                ? "fs-16"
                : "fs-20"
            } ${appWidth < 391 ? "pb-3" : "pb-5"} fw-500`}
            style={{ userSelect: "none" }}
          >
            Envie d'un tatouage ?
          </p>
          <p
            className={`${
              appWidth < 160
                ? "fs-5"
                : appWidth < 210
                ? "fs-7"
                : appWidth < 300
                ? "fs-9"
                : appWidth < 391
                ? "fs-11"
                : appWidth < 1100
                ? "fs-12"
                : "fs-16"
            } ${appWidth < 391 ? "pt-3" : "pt-5"} fw-400`}
            style={{ userSelect: "none" }}
          >
            Prenez rendez-vous via ce formulaire !
          </p>
        </div>
        <img
          className="pos-absolute"
          src={form}
          style={{
            userSelect: "none",
            transform: hover ? "translateY(-65%)" : "translateY(-30%)",
            width: appWidth < 250 ? "25px" : appWidth < 391 ? "35px" : "45px",
            transition: ".3s",
          }}
        />
      </div>
    </div>
  );
}
