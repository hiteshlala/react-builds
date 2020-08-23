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

console.log( '\nReplace asset paths so can be served on gh-pages\n' );
const replacein = [
  './docs/index.html',
  './docs/gulp/builtindex.js',
  './docs/gulp/builtone.js',
  './docs/gulp/builttwo.js',
  './docs/gulp/index.html',
  './docs/gulp/one.html',
  './docs/gulp/two.html',
  './docs/webpack/builtindex.js',
  './docs/webpack/builtone.js',
  './docs/webpack/builttwo.js',
  './docs/webpack/index.html',
  './docs/webpack/one.html',
  './docs/webpack/two.html'
];

const replacers = [
  { s: /"\/favicon.png"/g , r: '"./favicon.png"' },
  { s: /"\/gulp"/g , r: '"./gulp"' },
  { s: /"\/webpack"/g , r: '"./webpack"' },
  { s: /"\/webpack\/builtindex.js"/g , r: '"./builtindex.js"' },
  { s: /"\/webpack\/builtone.js"/g , r: '"./builtone.js"' },
  { s: /"\/webpack\/builttwo.js"/g , r: '"./builttwo.js"' },
  { s: /"\/gulp\/builtindex.js"/g , r: '"./builtindex.js"' },
  { s: /"\/gulp\/builtone.js"/g , r: '"./builtone.js"' },
  { s: /"\/gulp\/builttwo.js"/g , r: '"./builttwo.js"' },
  { s: /"\/gulp\/two.html"/g , r: '"./gulp/two.html"' },
  { s: /"\/gulp\/one.html"/g , r: '"./gulp/one.html"' },
  { s: /"\/gulp\/index.html"/g , r: '"./gulp/index.html"' },
  { s: /"\/webpack\/two.html"/g , r: '"./webpack/two.html"' },
  { s: /"\/webpack\/one.html"/g , r: '"./webpack/one.html"' },
  { s: /"\/webpack\/index.html"/g , r: '"./webpack/index.html"' },
];

replacein.forEach( f => {
  let a = fs.readFileSync( f, { encoding: 'utf8' } );
  a = replacers.reduce(( prev, curr ) => {
    return prev.replace( curr.s, curr.r );
  }, a );
  fs.writeFileSync( f, a, { encoding: 'utf8'} );
});

console.log( '\nDone\n')
