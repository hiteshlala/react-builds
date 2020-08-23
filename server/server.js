 /*
 * Created on Sat Aug 22 2020
 * Copyright (c) 2020 Hitesh Lala
 */

const Koa = require( 'koa') ;
const bodyparse = require( 'koa-body') ;
const mount = require( 'koa-mount' );
const static = require( 'koa-static' );

const port = 7523;

function logrequests() {
  return ( ctx, next ) => {
    console.log( ctx.method, ctx.path );
    return next();
  }
}

const gulpbuild = new Koa();
gulpbuild.use( static( '../gulpbuild/build') );

const webpackbuild = new Koa();
webpackbuild.use( static( '../webpackbuild/build') );

const app = new Koa();
app.use( bodyparse() );
app.use( logrequests() );
app.use( mount('/gulp', gulpbuild) );
app.use( mount('/webpack', webpackbuild) );
app.use( static( '../home') );
app.on('error', ( err, ctx ) => {
  console.error(`Server Error: ${err}`);
});

app.listen( port, ( error, success ) => {
  if ( error ) {
    console.log( 'Error:', error.message || error )
    console.log( 'Stack:', error.stack );
  }
  else {
    console.log( 'Server Lisetning on port:', port );
  }
})



