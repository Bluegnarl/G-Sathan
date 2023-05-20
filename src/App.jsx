import "./default.scss";

import { useRef } from "react";

import Header from './assets/components/Header/Header';
import { useEffect } from "react";
import { useState } from "react";
import About from "./assets/components/About/About";
import Portfolio from "./assets/components/Portfolio/Portfolio";

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
      {/* <Portfolio visible={visible} appWidth={appWidth} appHeight={appHeight}/> */}
    </div>
  );
}