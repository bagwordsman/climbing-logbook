'use strict';


// const imageSearch = require('node_modules/node-google-image-search-promise');


const imageSearch = require('../../node_modules/node-google-image-search-promise');

imageSearch('Cloggy', 0, 5)
  .then(results => {
    
    // results
    console.log("test");

    console.log(results); // an empty array

  });