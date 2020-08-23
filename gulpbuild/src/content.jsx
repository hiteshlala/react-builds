/*
 * Created on Sat Aug 22 2020
 * Copyright (c) 2020 Hitesh Lala
 */

import React from 'react';
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

export default function Content() {
  const { spacer, main, body, content } = useStyles();
  return (
    <div className={ main }>
      <Header />
      <div className={ body }>
        <div className={ content }>
          <p>This build results in multiple artefacts each its own entry point.</p>

          <li>use <code>babel</code> to compile the jsx</li>
          <li>use <code>browserify</code> to package for browser</li>
          <li>uglify optional</li>
          <li>using <code>react-jss</code> for css</li>

          <p>The build can use some cleanup.</p>

          <p><a href="https://github.com/hiteshlala/react-builds/gulpbuild">Get Code</a></p>

          <h1>Contents</h1>
          <li><a href="/gulp/one.html">Page One</a></li>
          <li><a href="/gulp/two.html">Page Two</a></li>
        </div>
      </div>
      <Footer />
    </div>
  )

}