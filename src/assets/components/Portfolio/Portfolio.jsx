import { useState, useEffect, useRef } from "react";

import { illustrations } from "../../datas/illustrations";
import redstar from "../../images/redstar.svg";

export default function Portfolio({ appInfo, appWidth }) {
  const portfolioRef = useRef(null);
  const sliderRef = useRef(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.map((entry) => {
        if (
          entry.intersectionRatio >= 0.5 ||
          appInfo.scroll >= portfolioRef.current.offsetTop
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
    portfolioRef.current && observer.observe(portfolioRef.current);
  }, [portfolioRef, appInfo]);

  const [scroll, setScroll] = useState(0);
  const [state, setState] = useState('left_collapsed')

  function scrollSet(side) {
    const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
      scrollLeft = sliderRef.current.scrollLeft;
    if (side === "left" && scroll > 0) {
      setScroll(scrollLeft - 700);
      setState('none');
    } else if (side === "right" && scroll < maxScroll) {
      setScroll(scrollLeft + 700);
      setState('none');
    } else if (scroll <= 0){
      setState('left_collapsed');
      setScroll(0);
    } else if (scroll >= maxScroll){
      setState('right_collapsed');
      setScroll(maxScroll);
    }
  }

  useEffect(() => {
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
    if(scroll >= maxScroll){
      setState('right_collapsed')
    } else if(scroll <= 0){
      setState('left_collapsed')
    }
  }, [scroll, sliderRef]);

  return (
    <div
      ref={portfolioRef}
      className={`${
        (appWidth < 950 && "pt-40",
        appWidth < 300
          ? "p-16 pb-48"
          : appWidth < 1100
          ? "p-32 pb-48"
          : appWidth < 1650
          ? "p-48 pb-96"
          : "p-64 pb-96")
      } d-flex-column w-full`}
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
        } d-flex-row jc-space-between ai-center`}
      >
        <div>
          <span
            onClick={() => scrollSet("left")}
            className="material-symbols-outlined cursor-pointer p-5 user-select-none"
            style={{ opacity: state === 'left_collapsed' ? '0.5' : '1' }}
          >
            arrow_back
          </span>
          <span
            onClick={() => scrollSet("right")}
            className="material-symbols-outlined cursor-pointer p-5 user-select-none"
            style={{ opacity: state === 'right_collapsed' ? '0.5' : '1' }}
          >
            arrow_forward
          </span>
        </div>
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
            style={{
              zIndex: "1",
              transition:
                "opacity .6s ease-out .15s, transform .6s ease-out .1s",
              opacity: visible ? "1" : "0",
              transform: visible ? "translateX(0%)" : "translateX(50%)",
            }}
          >
            Portfolio
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
              transition:
                "opacity .6s ease-out .3s, transform .25s ease-out .5s",
              opacity: visible ? "1" : "0",
              transform: visible ? "scale(100%)" : "scale(0%)",
            }}
          />
        </div>
      </div>
      <div
        ref={sliderRef}
        className="d-flex-row w-full jc-space-between scrollbar-none"
        style={{
          transition: "opacity .3s ease-out .4s, transform .3s ease-out .4s",
          opacity: visible ? "1" : "0",
          transform: visible ? "translateY(0%)" : "translateY(20%)",
          overflowX: "scroll",
          overflowY: "none",
        }}
      >
        {illustrations.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            className="mr-24 hover-slider-image"
            style={{
              height: "700px",
              minWidth: "500px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
