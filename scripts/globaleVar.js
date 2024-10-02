
const MARKAKARTET_DOMENE = "markakartet.no"

// Gjøre slik at /skole kan hente dataen
const loc = window.location;
// console.log(loc);

const origin = loc.origin;
// console.log("origin: " + origin);

// NOTAT: origin funker dårlig med github-page addressen for testsiden.

var originWithSlash = origin + "/";
// console.log("origin with slash: " + originWithSlash);

var isGithubSite = originWithSlash.includes("github.io");

if(isGithubSite){
    originWithSlash += "markakartet_dev/";
    // console.log("fixed origin for github.io: " + originWithSlash);
}

const erMarkakartetDomene = originWithSlash.includes(MARKAKARTET_DOMENE);

// Bruk for console-logg meldinger: if(debug)
const debug = !originWithSlash.includes(MARKAKARTET_DOMENE)
