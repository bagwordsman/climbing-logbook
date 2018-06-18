"use strict";
const logbookSettings = (function() {

    const settings = {
        
        
        // ______________________________________________________
        // source
        endpoint : 'json/mb-logbook.json',

        
        
        // ______________________________________________________
        // text content

        // search view
        placeHolder : 'Climb or Crag',
        howTo : 'Type to filter logbook climbs by climb name or crag name',
        noResults : 'No results found. Please try again',

        // terms
        // - could set search terms here. Currently filter by climb or crag (upper and lowercase, no numerals)
        // - would require different filter methods

        // climb info
        // - settings for climb info view

        // 3: style - icons. Colours from variables
        styleSuccess : '',
        styleSuccessTR : 'fa-check',
        styleFail : 'fa-close',

        // 5: notes
        infoFallbackClass : 'no-notes',
        infoFallback : 'No notes contributed for this climb'

        
    };

    return settings;

}());