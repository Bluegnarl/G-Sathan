import "./default.scss";

import { useRef } from "react";

import Header from "./assets/components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import About from "./assets/components/About/About";
import Portfolio from "./assets/components/Portfolio/Portfolio";
import CenteredText from "./assets/components/CenteredText/CenteredText";
import Contact from "./assets/components/Contact/Contact";
import Footer from "./assets/components/Footer/Footer";

export default function App() {
  const appRef = useRef(null);

  const [appWidth, setAppWidth] = useState("");
  const [appHeight, setAppHeight] = useState("");

  const [appInfo, setAppInfo] = useState({
    size: 0,
    scroll: 0,
    ref: appRef && appRef,
  });

  useEffect(() => {
    setAppInfo({
      ...appInfo,
      size: appRef.current.getBoundingClientRect().width,
      ref: appRef && appRef,
    });
    window.addEventListener("resize", () =>
      setAppInfo({
        ...appInfo,
        size: appRef.current.getBoundingClientRect().width,
      })
    );
  }, [appRef]);

  useEffect(() => {
    setAppWidth(appRef.current.getBoundingClientRect().width);
    setAppHeight(appRef.current.getBoundingClientRect().height);
    window.addEventListener("resize", () => {
      setAppWidth(appRef.current.getBoundingClientRect().width);
      setAppHeight(appRef.current.getBoundingClientRect().height);
    });
  }, []);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting &&
            (setVisible(entry.isIntersecting),
            observer.unobserve(entry.target));
        });
      },
      { threshold: [0.5] }
    );
    appRef.current && observer.observe(appRef.current);
  }, [appRef]);

  return (
    <div
      className="App"
      ref={appRef}
      onScroll={(e) => {
        setAppInfo({ ...appInfo, scroll: e.target.scrollTop });
      }}
    >
      <Header
        appInfo={appInfo}
        visible={visible}
        appWidth={appWidth}
        appHeight={appHeight}
      />
      <About
        appInfo={appInfo}
        display="none"
        visible={visible}
        appWidth={appWidth}
        appHeight={appHeight}
      />
      <Portfolio appInfo={appInfo} appWidth={appWidth} appHeight={appHeight} />
      <CenteredText
        appInfo={appInfo}
        appWidth={appWidth}
        appHeight={appHeight}
        title={"Attention"}
        content1={`L'acte est relativement intime car il s'agit d'une altération définitive de l'intégrité physique.`}
        content2={`Il est important de le comprendre avant d'envisager quoique ce soit.`}
      />
      <Contact appInfo={appInfo} appWidth={appWidth} appHeight={appHeight} />
      <CenteredText
        appInfo={appInfo}
        appWidth={appWidth}
        appHeight={appHeight}
        title={"Activités"}
        content1={`En plus du tatouage, je travaille également sur des commandes d'illustrations et de produits dérivées.`}
        content2={``}
      />
      <Footer appInfo={appInfo} />
    </div>
  );
}
