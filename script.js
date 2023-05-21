const { fs } = require('fs')
const express = require('express');
const app = express();
const path = require('path');

app.get( '/', function( req, res ) {
    res.sendFile( path.join( __dirname,  'index.html' ));
  });
app.listen(3000);



function write_stuff(stuff_to_write) {
    fs.writeFileSync('../poot.json', JSON.stringify(stuff_to_write));
}