
import './App.css';

import React, { useEffect } from 'react';


import Header from './components/Header/Header.js'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer.js'





function App() {
  let y = 0;
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      if (window.pageYOffset < y) {
        document.querySelector('.header').style.marginTop = "0px";
      } else {
        document.querySelector('.header').style.marginTop = "-74px";
      }
      y = window.pageYOffset;
    }
  }
  useEffect(() => {
    // window.location.pathname = '/project-asli-astronomy'
  }, [])
    ;

  // const handleEventAction = useMemo(() => {
  //   return action => setAction(action);
  // }, [])


  const pathGit = '/project-asli-astronomy';

  return (
    <div className="App">
      <Header pathGit={pathGit} />
      <Content pathGit={pathGit} />
      <Footer
        pathGit={pathGit}
        email={"Ausy.asli@gmai.com"}
        phone={"142.857.9999"}
      />
    </div>
  );
}

export default App;
