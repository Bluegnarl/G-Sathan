import "./default.scss";

import NavBar from './assets/components/NavBar/NavBar';
import Header from './assets/components/Header/Header';
import About from './assets/components/Text/Text';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}