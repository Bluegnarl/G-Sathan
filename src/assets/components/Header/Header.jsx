import headerImage from "../../images/header.png";
import About from "../About/About";
import { useRef, useState, useEffect } from "react";

export default function Header({ appSize }) {
  const headerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    });
    headerRef.current && observer.observe(headerRef.current);
  }, [headerRef]);

  return (
    <div
      ref={headerRef}
      className={`${
        appSize >= 950
          ? "d-flex-row b-surface"
          : "d-flex-column-reverse b-surface-1"
      } w-full`}
      style={{
        height:
          appSize < 950
            ? "auto"
            : appSize < 1100
            ? "55%"
            : appSize < 1200
            ? "65%"
            : "100%",
        minHeight: "300px",
      }}
    >
      <div className="d-flex-row jc-center" style={{ flex: "1" }}>
        <About appSize={appSize} visible={visible} />
      </div>
      <div
        className="pos-relative"
        style={
          appSize < 180
            ? {
                width: "100%",
                height: visible ? "150px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 250
            ? {
                width: "100%",
                height: visible ? "200px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 300
            ? {
                width: "100%",
                height: visible ? "250px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 350
            ? {
                width: "100%",
                height: visible ? "300px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 391
            ? {
                width: "100%",
                height: visible ? "350px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 450
            ? {
                width: "100%",
                height: "400px",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : appSize < 950
            ? {
                width: "100%",
                height: visible ? "600px" : "0",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
            : {
                width: visible ? "50%" : "70%",
                opacity: visible ? "1" : "0",
                transition: "all .8s",
              }
        }
      >
        <img
          src={headerImage}
          style={
            appSize < 950
              ? {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "0 0",
                }
              : {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }
          }
        />
        <div
          className="pos-absolute"
          style={{
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 18.2%)",
          }}
        ></div>
      </div>
      {/* <div
        className="b-cover d-flex-row ai-center jc-center"
        style={{
          width: "50%",
          height: "100%",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center",
          background: `url(${backgroundimage})`,
        }}
      >
      </div> */}
    </div>
  );
}
