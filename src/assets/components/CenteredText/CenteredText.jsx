import { useState, useEffect, useRef } from "react";

import redstar from "../../images/redstar.svg";

export default function CenteredText({ appWidth, title, content1, content2 }) {
  const centeredTextRef = useRef(null);
  
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    }, {threshold: [0.5]});
    centeredTextRef.current && observer.observe(centeredTextRef.current);
  }, [centeredTextRef]);

  return (
    <div
      ref={centeredTextRef}
      className={`${
        appWidth < 300
          ? "p-16 pb-48"
          : appWidth < 1100
          ? "p-32 pb-48"
          : appWidth < 1650
          ? "p-48 pb-96"
          : "p-64 pb-96"
      } d-flex-column ai-center`}
      style={{ transition: 'opacity .3s ease-out, transform .5s ease-out', opacity: visible ? '1' : '0', transform: visible ? 'translateY(0%)' : 'translateY(30%)' }}
    >
      <div
        className={`${
          appWidth < 300
            ? "pb-12"
            : appWidth < 391
            ? "pb-16"
            : appWidth < 1100
            ? "pb-20"
            : "pb-28"
        } d-flex-row`}
      >
        <div className="pos-relative d-flex-row ai-center jc-center">
          <p
            className={`${
              appWidth < 160
                ? "fs-20"
                : appWidth < 300
                ? "fs-24"
                : appWidth < 391
                ? "fs-28"
                : appWidth < 1100
                ? "fs-32"
                : appWidth < 1650
                ? "fs-40"
                : appWidth < 2000
                ? "fs-48"
                : "fs-56"
            } ff-title`}
            style={{ zIndex: "1" }}
          >
            {title}
          </p>
          <img
            src={redstar}
            className="pos-absolute"
            style={{
              width:
                appWidth < 160
                ? "35px"
                : appWidth < 300
                ? "45px"
                : appWidth < 391
                ? "55px"
                : appWidth < 1100
                ? "65px"
                : appWidth < 1650
                ? "80px"
                : appWidth < 2000
                ? "100px"
                : "120px",
            }}
          />
        </div>
      </div>
      <div
        className={`${
          appWidth < 160
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
        } w-full fw-300`}
      >
        <p className="d-flex-column w-full ta-center">
          {content1}{appWidth > 605 ? (<br/>) : (' ')}{content2}
        </p>
      </div>
    </div>
  );
}
