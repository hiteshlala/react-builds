# React Build Methods


This repo demos building React rontends using Gulp and Webpack.

Each frontend is its own independent project that ouputs to a build folder.

These are NOT single page apps.


The server is barebones and simply serves static assets from the build folders of the frontends.  The server expects the build artefacts to exist.


Each frontend and the server have to be independently `npm install`ed and `npm run build`.


The source files are written in plain JavaScript and is essentially the same in each build type.  They use React, JSX, and JSS.


## Gulpbuild
Depends on Babel and Browserify to generate the assets.


## Webpackbuild
Depends on Babel to generate the assets.




## ISC License (ISC)
## Copyright 2020 Hitesh Lala

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


