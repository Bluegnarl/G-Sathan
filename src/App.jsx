import "./default.scss";

import { useRef } from "react";

import Header from './assets/components/Header/Header';
import { useEffect } from "react";
import { useState } from "react";
import About from "./assets/components/About/About";
import Portfolio from "./assets/components/Portfolio/Portfolio";
import CenteredText from "./assets/components/CenteredText/CenteredText";
import Footer from "./assets/components/Footer/Footer";

export default function App() {
  const appRef = useRef(null);
  
  const [appWidth, setAppWidth] = useState('');
  const [appHeight, setAppHeight] = useState('');
  
  useEffect(() => {
    setAppWidth(appRef.current.getBoundingClientRect().width);
    setAppHeight(appRef.current.getBoundingClientRect().height);
    window.addEventListener('resize', () => {
      setAppWidth(appRef.current.getBoundingClientRect().width);
      setAppHeight(appRef.current.getBoundingClientRect().height);
    })
  }, [])

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        entry.isIntersecting &&
          (setVisible(entry.isIntersecting), observer.unobserve(entry.target));
      });
    });
    appRef.current && observer.observe(appRef.current);
  }, [appRef]);
  
  return (
    <div className="App" ref={appRef}>
      <Header visible={visible} appWidth={appWidth} appHeight={appHeight}/>
      <About display='none' visible={visible} appWidth={appWidth} appHeight={appHeight}/>
      <Portfolio visible={visible} appWidth={appWidth} appHeight={appHeight}/>
      <CenteredText visible={visible} appWidth={appWidth} appHeight={appHeight} title={'Attention'} content1={`L'acte est relativement intime car il s'agit d'une altération définitive de l'intégrité physique.`} content2={`Il est important de le comprendre avant d'envisager quoique ce soit.`}/>
      <CenteredText visible={visible} appWidth={appWidth} appHeight={appHeight} title={'Activités'} content1={`En plus du tatouage, je travaille également sur des commandes d'illustrations et de produits dérivées.`} content2={``}/>
      <Footer />
    </div>
  );
}