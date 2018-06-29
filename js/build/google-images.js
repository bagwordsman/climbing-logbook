'use strict';
// this thing is still a fucker, see notes file
// fs.readFileSync throws an error


// const imageSearch = require('node_modules/node-google-image-search-promise');


// require('dotenv').config();
// require('dotenv').config({path: '.env'})


const imageSearch = require('../../node_modules/node-google-image-search-promise');

// console.log(imageSearch());

imageSearch('Cloggy', 0, 5)
  .then(results => {
    
    // results
    console.log("test");

    console.log(results); // an empty array

  });