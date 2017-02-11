// ==UserScript==
// @name         CS2610 Quora
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Avoid Quora login wall by appending share=1 to query string.
// @author       Mark Lindsay
// @match           *://quora.com/*
// @match           *://www.quora.com/*
// @run-at          document-start
// ==/UserScript==

(function() {
    'use strict';

   var url = window.location.href;
    if(url.slice(-1) != 1){
        url = url + "?share=1";
        window.location.assign(url);
    }
})();