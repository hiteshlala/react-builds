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
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    height: '50px',
    lineHeight: '50px',
    backgroundColor: '#f0f8ff',
    width: '100vw',
    borderTop: '1px solid blue',
    fontSize: '22px',

  }
})

export default function Footer() {
  const { main } = useStyles();
  const year = new Date().getFullYear()
  const copyyear = year === 2020 ? '2020' : `2020 - ${year}`;
  
  return (
    <div className={main}>
      <a href="https://hiteshlala.com"> &copy; Hitesh Lala {copyyear} </a> 
    </div>
  )

}