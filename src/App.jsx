import "./default.scss";

import { useRef } from "react";

import NavBar from './assets/components/NavBar/NavBar';
import Header from './assets/components/Header/Header';
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const appRef = useRef(null);
  
  const [appSize, setAppSize] = useState('');
  
  useEffect(() => {
    setAppSize(appRef.current.getBoundingClientRect().width);
    window.addEventListener('resize', () => {
      setAppSize(appRef.current.getBoundingClientRect().width);
    })
  }, [])
  
  return (
    <div className="App" ref={appRef}>
      <NavBar />
      <Header appSize={appSize}/>
    </div>
  );
}