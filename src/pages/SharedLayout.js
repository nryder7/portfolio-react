import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { SmallSidebar, Navbar } from '../components/index.js';

const SharedLayout = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Wrapper>
      <main className='main'>
        <Navbar
          showLinks={showLinks}
          showSidebar={showSidebar}
          toggleLinks={toggleLinks}
          toggleSidebar={toggleSidebar}
        />
        <SmallSidebar
          toggle
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
        <div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    display: grid;
    grid-template-columns: 1fr;
  }
  .content {
    width: 90vw;
    margin: 0 auto;
    padding: 0;
    margin-top: -1.5rem;
  }
  @media (min-width: 768px) {
    /* .main {
      grid-template-columns: 1fr; */
    /* grid-template-columns: auto 1fr; */
    /* } */
    .content {
      width: 90%;
      padding: 0;
      padding: 2rem 0;
      margin-top: 0.25rem;
    }
  }
`;
export default SharedLayout;
