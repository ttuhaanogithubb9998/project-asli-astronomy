
import './App.css';

import React, { useCallback, useState } from 'react';


import Header from './components/Header/Header.js'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer.js'





function App() {
  const [action, setAction] = useState({ name: "library", key: "Home" });
  const [itemKey, setItemKey] = useState('')

  const handleEventAction = useCallback((action, key = "") => {
    window.scrollTo(0, 0);
    setAction(action);
    setItemKey(key)
  }, []);
  
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


  // const handleEventAction = useMemo(() => {
  //   return action => setAction(action);
  // }, [])

  return (
    <div className="App">
      <Header handleEventAction={handleEventAction} />

      <Content action={JSON.stringify(action)}
        itemKey={itemKey}
        handleEventAction={handleEventAction}
      />

      <Footer
        email={"Ausy.asli@gmai.com"}
        phone={"142.857.9999"}
        handleEventAction={handleEventAction}
      />
    </div>
  );
}

export default App;
