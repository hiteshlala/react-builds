/*
 * Created on Sat Aug 22 2020
 * Copyright (c) 2020 Hitesh Lala
 */


const gulp = require( 'gulp' );
const uglify = require( 'gulp-uglify' );
const print = require( 'gulp-print' ).default;
const babel	= require( 'gulp-babel' );
const browserify = require( 'browserify' );
const fs = require( 'fs' );


const srcfiles = [
  { in: './build/index.js', out: './build/builtindex.js'},
  { in: './build/one.js', out: './build/builtone.js' },
  { in: './build/two.js', out: './build/builttwo.js' }
];


function doClean( cb ) {
  const del = fs.readdirSync('./build');
  del.forEach( i => {
    if ( !/.keep/.test( i ) ) {
      fs.unlinkSync( `./build/${i}` );
    }
  });
  cb();
}


function doCompile( cb ) {
  const opts = {
    presets: [
      [ 
        '@babel/preset-env', 
        { 
          targets: 'defaults', 
          modules: 'commonjs'
        } 
      ],
      [ '@babel/preset-react' ]
    ],
  };
  return gulp.src( [ './src/*.jsx' ] )
    .pipe( print( function(fp){ return '[babelify] >> '+ fp; }) )
    .pipe( babel( opts ) )
    .pipe( gulp.dest('./build') )
    .on( 'error', cb );
}


function doBrowserify( cb ) {
  async function inline() {
    try {
      for ( item of srcfiles ) {
        await new Promise(( resolve, reject) => {
          const b = browserify();
          const out = fs.createWriteStream( item.out );
          b.add( item.in );
          b.bundle()
          .pipe( out )
          .on( 'error', reject )
          .on( 'close', resolve )
          .on( 'exit', resolve );
        });
      }
      cb();
    }
    catch( e ) {
      cb( e );
    }
  }
  inline();
}


function doUglify( cb ) {
  const files = srcfiles.map( i => i.out );
  return gulp.src( files )
    .pipe( print( function(fp){ return '[uglify] >> '+ fp; }) )
    .pipe( uglify() )
    .pipe( gulp.dest('./build') )
    .on( 'error', cb );
}


function doCopy( cb ) { 
  const files = [ 
    './src/*.html',
  ];
  return gulp.src( files )
    .pipe( print( function(fp) { return '[html] >> '+ fp; }) )
    .pipe( gulp.dest('./build') )
    .on( 'error', cb );
}


exports.default = gulp.series( 
  doClean, 
  doCompile, 
  doBrowserify, 
  doUglify, 
  doCopy 
);
