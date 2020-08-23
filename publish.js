/*
 * Created on Sun Aug 23 2020
 * Copyright (c) 2020 Hitesh Lala
 */

const fs = require( 'fs' );
const path = require( 'path' );

const filelist = [
  'builtindex.js',
  'builtone.js',
  'builttwo.js',
  'index.html',
  'one.html',
  'two.html'
];


function mkdir( p ) {
  try {
    fs.mkdirSync( p );
    console.log( 'Created', p );
  }
  catch ( e ) {
    if ( e.code === 'ENOENT' ) {
      // create the parent dir
      mkdir( path.dirname( p ) );
      // then try again
      mkdir( p );
    }
    else if ( e.code === 'EEXIST' ) {
      console.log( p, 'already exists' );
    }
    else {
      console.log( p, e.code );
      throw e;
    }
  }
}

function rmdirSync( d ) {
  fs.readdirSync(d)
  .forEach( item => {
    const curPath = d + "/" + item;
    if ( fs.lstatSync(curPath).isDirectory() ) { 
      rmdirSync(curPath);
    } 
    else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(d);
}



console.log( '\nClearing docs folder\n');
rmdirSync( './docs' );


console.log( '\nCreate dics directory structre\n');
mkdir( './docs/gulp' );
mkdir( './docs/webpack' );


console.log( '\nCopy build artefacts\n' );
fs.copyFileSync( './home/favicon.png', './docs/favicon.png' );
fs.copyFileSync( './home/index.html', './docs/index.html' );
filelist.forEach( f => {
  fs.copyFileSync( `./gulpbuild/build/${f}`, `./docs/gulp/${f}` );
  fs.copyFileSync( `./webpackbuild/build/${f}`, `./docs/webpack/${f}` );
})


console.log( '\nDone\n')
