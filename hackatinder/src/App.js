import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Menu from './components/Shared/Menu'
import Sidebar from './components/Shared/Sidebar';

function App() {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarIsOpen(true)
  }

  const closeSidebar = () => {
    setSidebarIsOpen(false)
  }

  return (
    <BrowserRouter>
      <Menu onHamburgerClicked={openSidebar}/>
      <Sidebar state={sidebarIsOpen} onCloseSidebar={closeSidebar}/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;