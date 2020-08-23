/*
 * Created on Sat Aug 22 2020
 * Copyright (c) 2020 Hitesh Lala
 */

import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  spacer: {
    flexGrow: 1
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    maxWidth: 'var(--max-width)',
    height: '50px',
    lineHeight: '50px',
    margin: '0 auto',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  wrapper: {
    backgroundColor: '#f0f8ff',
    width: '100vw',
    borderBottom: '1px solid blue',
  },
  logo: {
    padding: '7px 0px',
  },
  title: {
    lineHeight: '50px',
    fontSize: '30px',
    paddingLeft: '15px'
  },
  nav: {
    lineHeight: '50px',
    fontSize: '20px',
    paddingRight: '5px'
  }
});

export default function Header() {
  const { 
    main, wrapper, spacer, logo, title, nav 
  } = useStyles();
  return (
    <div className={wrapper}>
      <div className={main}>
        <div className={logo}><img src="/favicon.png" width={36} height={36} ></img></div>
        <div className={title}>React Build Gulp</div>
        <div className={spacer}></div>
        <div className={nav}><a href="/react-builds/index.html">Builds</a></div>
        <div className={nav}><a href="/">Home</a></div>
      </div>
    </div>
  )

}