/*
 * Created on Sat Aug 22 2020
 * Copyright (c) 2020 Hitesh Lala
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

import Header from './header';
import Footer from './footer';

const useStyles = createUseStyles({
  spacer: {
    flexGrow: 1
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  body: {
    height: '100%'
  },
  content: {
    paddingTop: '2px',
    fontSize: '18px',
    maxWidth: 'var(--max-width)',
    width: '80%',
    height: '100%',
    margin: '0 auto',
  }
})

function Content() {
  const { main, body, content } = useStyles();
  return (
    <div className={ main }>
      <Header />
      <div className={ body }>
        <div className={ content }>
          <h1>Page One</h1>
          <li><a href="/webpack/index.html">Contents</a></li>
          <li><a href="/webpack/two.html">Page Two</a></li>
        </div>
      </div>
      <Footer />
    </div>
  );
}



ReactDOM.render(
  <Content />, 
  document.getElementById('root')
);